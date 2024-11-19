import { Helmet } from 'react-helmet-async';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import PageHeader from '@/components/page-header/PageHeader';

const ListPage = () => {
  return (
    <main>
      <Helmet>
        <title>NYT Bestsellers Books</title>
      </Helmet>

      <Container sx={{ marginBlock: { xs: 5, md: 6 } }}>
        <Stack gap={4}>
          <PageHeader
            title="List Name"
          />

        </Stack>
      </Container>
    </main>
  );
}

export default ListPage;