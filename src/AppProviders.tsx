import type { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@mui/material/styles';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { persistQueryClient } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24 * 1,
      gcTime: 1000 * 60 * 60 * 24 * 1,
    },
  },
});

const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
});

persistQueryClient({
  queryClient,
  persister: localStoragePersister,
});

import defaultTheme from '@/themes/default';

interface AppProvidersProps {
  children: ReactNode;
}

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={defaultTheme}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>

  );
};

export default AppProviders;