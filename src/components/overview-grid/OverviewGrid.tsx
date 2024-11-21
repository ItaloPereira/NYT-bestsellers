import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import DateFilter from '@/components/date-filter/DateFilter';
import OverviewList from "@/components/overview-list/OverviewList";
import OverviewGridSkeleton from './OverviewGridSkeleton';

import type { List } from '@/types/books';

const OverviewGrid = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentDate, setCurrentDate] = useState(searchParams.get('date') || '');
  const overviewEndpoint = `${import.meta.env.VITE_BASE_URL}/lists/overview.json`;
  const apiKey = import.meta.env.VITE_API_KEY;

  const { isPending, isError, data } = useQuery({
    queryKey: ['overview', currentDate],
    queryFn: async () => {
      const response = await fetch(`${overviewEndpoint}?api-key=${apiKey}${currentDate ? `&published_date=${currentDate}` : ''}`);
      
      if (!response.ok || response.status !== 200) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      
      return await response.json();
    },
  });

  useEffect(() => {
    if (!currentDate && data?.results?.published_date) {
      setSearchParams({ date: data.results.published_date });
    }
  }, [data, currentDate, setSearchParams]);

  const handlePrev = () => {
    if (data?.results?.previous_published_date) {
      setCurrentDate(data.results.previous_published_date);
      setSearchParams({ date: data.results.previous_published_date });
    }
  };

  const handleNext = () => {
    if (data?.results?.next_published_date) {
      setSearchParams({ date: data.results.next_published_date });
      setCurrentDate(data.results.next_published_date);
    }
  };

  if (isError || (!isPending && !data?.results)) return <Typography color="error" variant="h6" component="h2">Failed to load Bestsellers books. Try again later.</Typography>;

  return (
    <Stack gap={2}>
      {(currentDate || data?.results?.published_date) && (
        <DateFilter
          value={currentDate || data?.results?.published_date || ''}
          onPrev={handlePrev}
          onNext={handleNext}
          isLast={!data?.results?.next_published_date}
        />
      )}
      <Stack gap={5}>
        {isPending ? <OverviewGridSkeleton /> :
          data.results.lists.map((list: List) => (
            <OverviewList
              key={list.list_id}
              name={list.display_name}
              listKey={list.list_name_encoded}
              books={list.books}
            />
          ))
        }
      </Stack>
    </Stack>
  )
}

export default OverviewGrid;