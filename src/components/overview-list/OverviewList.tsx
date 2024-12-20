import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography, { TypographyProps } from '@mui/material/Typography';
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

const Heading = styled(Typography)<TypographyProps>(({ theme }) => ({
    fontSize: theme.typography.pxToRem(20),

    [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.pxToRem(24),
  },
}));

const OverviewList = ({ name, listKey, books, displayAsAFullList }: OverviewListProps) => {
  return (
    <Stack gap={2}>
      {!displayAsAFullList && (
        <Link href={`/${listKey}`} width="fit-content">
          <Stack flexDirection="row" alignItems="center">
            <Heading component="h2" variant="h6" sx={{ fontFamily: 'inherit' }}>{name}</Heading>
            <ChevronRightIcon fontSize="medium" />
          </Stack>
        </Link>
      )}

      <BorderedGrid container spacing={{ xs: 3, md: 2 }} displayAsAFullList={displayAsAFullList}>
        {books && books.map((book, index) => (
          <Grid size={{ xs: 12, md: displayAsAFullList ? 6 : 2.4 }} key={index}>
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