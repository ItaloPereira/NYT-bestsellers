import { Helmet } from 'react-helmet-async';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import PageHeader from '@/components/page-header/PageHeader';
import OverviewGrid from '@/components/overview-grid/OverviewGrid';
import AllListNames from '@/components/all-list-names/AllListNames';

const HomePage = () => {
  return (
    <main>
      <Helmet>
        <title>NYT Bestsellers Books</title>
      </Helmet>

      <Container sx={{ marginBlock: { xs: 5, md: 6 } }}>
        <Stack gap={10}>
          <Stack gap={2}>
            <PageHeader
              title="The New York Times Best Sellers"
              description="Authoritatively ranked lists of books sold in the United States, sorted by format and genre."
              showShareButton={true}
            />

            <OverviewGrid />
          </Stack>

          <AllListNames />
        </Stack>
      </Container>
    </main>
  );
};

export default HomePage;