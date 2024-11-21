import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import Autocomplete from '@mui/material/Autocomplete';

import type { List } from '@/types/books';

const AllListNames = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const endpoint = `${import.meta.env.VITE_BASE_URL}/lists/names.json`;
  const apiKey = import.meta.env.VITE_API_KEY;
  const navigate = useNavigate();

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

  if (isPending) return null;
  if (isError || !data?.results) return <Typography color="error" variant="h6" component="h2">Failed to load search input. Try again later.</Typography>;

  const formatedList = data.results.map((list: List) => ({ label: list.display_name, id: list.list_name_encoded }))

  return (
    <Stack gap={2}>
      <Autocomplete
        disablePortal
        options={formatedList}
        size="small"
        renderOption={(props, option: { label: string, id: string; }) => {
          return (
            <Box component="li" {...props} key={option.id}>
              <Link href={`/${option.id}`}>{option.label}</Link>
            </Box>
          );
        }}
        renderInput={(params) => (
          <TextField
            label="Explore All Book Lists"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearch}
            {...params}
          />
        )}
        onChange={(_, value) => { if (value) navigate(`/${value?.id}`)}}
      />
    </Stack>
  );
};

export default AllListNames;