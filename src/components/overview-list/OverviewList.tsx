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
}

const BorderedGrid = styled(Grid)<Grid2Props>(({ theme }) => ({
    '--Grid-borderWidth': '1px',
    borderBottom: 'var(--Grid-borderWidth) solid',
    borderColor: theme.palette.grey[400],
    paddingBottom: theme.spacing(2),

    [theme.breakpoints.up('md')]: {
      borderBottom: 'none',
      paddingBottom: 0,

      '& > div': {
        borderRight: 'var(--Grid-borderWidth) solid',
        borderColor: theme.palette.grey[400],
      },
      '& > div:last-of-type': {
        borderRight: 'none',
      },
  }
}));

const OverviewList = ({ name, listKey, books }: OverviewListProps) => {
  return (
    <Stack gap={2}>
      <Link href={`/${listKey}`} width="fit-content">
        <Stack flexDirection="row" alignItems="center">
          <Typography component="h2" variant="h6" sx={{ fontFamily: 'inherit' }}>{name}</Typography>
          <ChevronRightIcon fontSize='small' />
        </Stack>
      </Link>

      <BorderedGrid container spacing={2}>
        {books.map((book, index) => (
          <Grid size={{ xs: 12, md: 2.4 }} key={index}>
            <OverviewCard
              title={book.title}
              image={book.book_image}
              rank={book.rank}
              weeksOnTheList={book.weeks_on_list > 1 ? `${book.weeks_on_list} WEEKS ON THE LIST` : 'NEW THIS WEEK'}
              contributor={book.contributor}
              description={book.description}
              buyLinks={book.buy_links}
            />
          </Grid>
        ))}
      </BorderedGrid>

    </Stack>
  )
}

export default OverviewList;