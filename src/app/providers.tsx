// app/providers.tsx
'use client';

import { UserContextProvider } from '@/utils/context/user.context';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <UserContextProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </UserContextProvider>
    </CacheProvider>
  );
}
