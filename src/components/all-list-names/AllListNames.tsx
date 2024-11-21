import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import AllListNamesSkeleton from './AllListNamesSkeleton'

import type { List } from '@/types/books';

const AllListNames = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const endpoint = `${import.meta.env.VITE_BASE_URL}/lists/names.json`;
  const apiKey = import.meta.env.VITE_API_KEY;

  const { isPending, isError, data } = useQuery({
    queryKey: ['lists'],
    queryFn: async () => {
      const response = await fetch(`${endpoint}?api-key=${apiKey}`);
      
      if (!response.ok || response.status !== 200) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const json = await response.json();
      return json;
    },
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  if (isPending) return <AllListNamesSkeleton />;
  if (isError || !data?.results) return <Typography color="error" variant="h6" component="h2">Failed to load lists. Try again later.</Typography>;

  const filteredLists = data.results.filter((list: { list_name: string }) =>
    list.list_name.toLowerCase().includes(searchTerm)
  );

  return (
    <Stack gap={2}>
      <Typography variant="h5" component="h2">
        Explore All Book Lists
      </Typography>
      <TextField
        label="Search Lists"
        variant="outlined"
        size="small"
        value={searchTerm}
        onChange={handleSearch}
        fullWidth
      />
      <Stack gap={2}>
        {filteredLists.map((list: List) => (
          <Link key={list.list_name_encoded} href={`/${list.list_name_encoded}`}>{list.display_name}</Link>
        ))}
      </Stack>
    </Stack>
  );
};

export default AllListNames;