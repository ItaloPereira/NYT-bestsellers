import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query'

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import PageHeader from '@/components/page-header/PageHeader';
import OverviewGrid from '@/components/overview-grid/OverviewGrid';

const HomePage = () => {
  const overviewEndpoint = `${import.meta.env.VITE_BASE_URL}/lists/overview.json`;
  const apiKey = import.meta.env.VITE_API_KEY;

  const { isPending, isError, data } = useQuery({
    queryKey: ['overview'],
    queryFn: async () => {
      const response = await fetch(`${overviewEndpoint}?api-key=${apiKey}`);
      return await response.json();
    },
  });

  return (
    <main>
      <Helmet>
        <title>NYT Bestsellers Books</title>
      </Helmet>

      <Container sx={{ marginBlock: { xs: 5, md: 6 } }}>
        <Stack gap={2}>
          <PageHeader
            title="The New York Times Best Sellers"
            description="Authoritatively ranked lists of books sold in the United States, sorted by format and genre."
          />

          <OverviewGrid data={data?.results} isLoading={isPending} isError={isError || (!isPending && !data.results)} />

        </Stack>
      </Container>
    </main>
  );
}

export default HomePage;