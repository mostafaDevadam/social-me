'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // Optional
import { useState } from 'react';

// Create QueryClient on client (per-request, but stable via state)
export function Providers({ children, dehydratedState }: { children: React.ReactNode; dehydratedState?: any }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000, // 5 min
            retry: 3,
          },
          
        },

       // initialDehydration: dehydratedState, // Hydrate from server state (plain object)
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}