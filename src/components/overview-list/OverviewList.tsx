import { useSearchParams } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid, { Grid2Props } from '@mui/material/Grid2';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import OverviewCard from "@/components/overview-card/OverviewCard";

import type { Book } from '@/types/books';

interface OverviewListProps {
  name: string;
  listKey: string;
  books: Book[];
  displayAsAFullList?: boolean;
}

const BorderedGrid = styled(Grid, {
  shouldForwardProp: (prop) => prop !== 'displayAsAFullList',
})<Grid2Props & { displayAsAFullList?: boolean }>(({ theme, displayAsAFullList }) => ({
  '--Grid-borderWidth': '1px',
  borderBottom: displayAsAFullList ? 'none' : 'var(--Grid-borderWidth) solid',
  borderColor: theme.palette.grey[400],
  paddingBottom: theme.spacing(2),

  [theme.breakpoints.up('md')]: {
    borderBottom: 'none',
    paddingBottom: 0,
    '& > div': {
      borderRight: displayAsAFullList ? 'none' : 'var(--Grid-borderWidth) solid',
      borderBottom: displayAsAFullList ? 'var(--Grid-borderWidth) solid' : 'none',
      borderColor: theme.palette.grey[400],
    },
    '& > div:last-of-type': {
      borderRight: 'none',
    },
  },
}));

const OverviewList = ({ name, listKey, books, displayAsAFullList }: OverviewListProps) => {
  const [searchParams] = useSearchParams();

  return (
    <Stack gap={2}>
      {!displayAsAFullList && (
        <Link href={`/${listKey}${searchParams.get('date') ? `?date=${searchParams.get('date')}` : ''}`} width="fit-content">
          <Stack flexDirection="row" alignItems="center">
            <Typography component="h2" variant="h6" sx={{ fontFamily: 'inherit' }}>{name}</Typography>
            <ChevronRightIcon fontSize='small' />
          </Stack>
        </Link>
      )}

      <BorderedGrid container spacing={2} displayAsAFullList={displayAsAFullList}>
        {books && books.map((book, index) => (
          <Grid size={{ xs: 12, md: displayAsAFullList ? 12 : 2.4 }} key={index}>
            <OverviewCard
              title={book.title}
              image={book.book_image}
              rank={book.rank}
              weeksOnTheList={book.weeks_on_list > 1 ? `${book.weeks_on_list} WEEKS ON THE LIST` : 'NEW THIS WEEK'}
              contributor={book.contributor}
              description={book.description}
              buyLinks={book.buy_links}
              extended={displayAsAFullList}
            />
          </Grid>
        ))}
      </BorderedGrid>

    </Stack>
  )
}

export default OverviewList;