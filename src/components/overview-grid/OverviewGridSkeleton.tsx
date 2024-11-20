import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

const OverviewGridSkeleton = () => {
  return (
    <Stack spacing={3}>
      <Skeleton variant="rectangular" height={200} />
      <Skeleton variant="rectangular" height={200} />
      <Skeleton variant="rectangular" height={200} />
    </Stack>
  )
}

export default OverviewGridSkeleton;