import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import PageHeader from '@/components/page-header/PageHeader';
import DateFilter from '@/components/date-filter/DateFilter';
import OverviewList from "@/components/overview-list/OverviewList";
import OverviewGridSkeleton from '@/components/overview-grid/OverviewGridSkeleton';

const CompleteList = () => {
  const { listName } = useParams<{ listName: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentDate, setCurrentDate] = useState(searchParams.get('date') || 'current');
  const apiKey = import.meta.env.VITE_API_KEY;

  const { isPending, isError, data } = useQuery({
    queryKey: ['complete-list', currentDate, listName],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/lists/${currentDate}/${listName}.json?api-key=${apiKey}`);
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

  if (isError || (!isPending && !data?.results)) return <Typography color="error" variant="h6" component="h2">Failed to load Complete List of books. Try again later.</Typography>;

  return (
    <Box>
      {data?.results?.display_name && (
        <Helmet>
          <title>{data.results.display_name}</title>
        </Helmet>
      )}

      <Stack gap={2}>
        {data?.results?.display_name && (
          <PageHeader
            title={data.results.display_name}
            showShareButton={true}
          />
        )}

        <Stack gap={2}>
          {(data?.results?.published_date) && (
            <DateFilter
              value={data?.results?.published_date || ''}
              onPrev={handlePrev}
              onNext={handleNext}
              isLast={!data?.results?.next_published_date}
            />
          )}
          <Stack gap={5}>
            {isPending ? <OverviewGridSkeleton /> :
              (
                <OverviewList
                  name={data.results.display_name}
                  listKey={data.results.list_name_encoded}
                  books={data.results.books}
                  displayAsAFullList
                />
              )
            }
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CompleteList;