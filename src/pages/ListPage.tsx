import Container from '@mui/material/Container';

import CompleteList from '@/components/complete-list/CompleteList';

const ListPage = () => {
  return (
    <main>
      <Container sx={{ marginBlock: { xs: 5, md: 6 } }}>
        <CompleteList />
      </Container>
    </main>
  );
};

export default ListPage;