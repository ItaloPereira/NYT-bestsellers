import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import CompleteList from '@/components/complete-list/CompleteList';
import AllListNames from '@/components/all-list-names/AllListNames';

const ListPage = () => {
  return (
    <main>
      <Container sx={{ marginBlock: { xs: 5, md: 6 } }}>
        <Stack gap={10}>
          <CompleteList />

          <AllListNames />
        </Stack>
      </Container>
    </main>
  );
};

export default ListPage;