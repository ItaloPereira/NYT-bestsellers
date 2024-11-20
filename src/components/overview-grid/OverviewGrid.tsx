import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import OverviewList from "@/components/overview-list/OverviewList";
import OverviewGridSkeleton from './OverviewGridSkeleton';

import type { Data } from '@/types/books';

interface OverviewGridProps {
  data: Data;
  isLoading: boolean;
  isError: boolean;
}

const OverviewGrid = ({ data, isLoading, isError }: OverviewGridProps) => {
  if (isLoading) return <OverviewGridSkeleton />;
  if (isError) return <Typography color="error" variant="h6" component="h2">Something went wrong... Try again later</Typography>;

  return (
    <Stack gap={5}>
      {data.lists.map((list) => (
        <OverviewList
          key={list.list_id}
          name={list.display_name}
          listKey={list.list_name_encoded}
          books={list.books}
        />
      ))}
    </Stack>
  )
}

export default OverviewGrid;