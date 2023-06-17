import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ThemeProvider} from 'styled-components/native';
import {AppNavigationRoutes} from '@routes/app-navigation.routes';

import {AuthContextProvider} from '@context/AuthContext';
import {ModalContextProvider} from '@context/ModalContext/index';

// import {ENV} from '@env';

import theme from '@theme/index';
import React from 'react';

// import {makeServer} from 'src/miragejs/server';

export default function App() {
  // if (ENV === 'development') {
  //   if (window.server) {
  //     window.server.shutdown();
  //   }

  //   window.server = makeServer({environment: ENV});
  // }

  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <ModalContextProvider>
            <AppNavigationRoutes />
          </ModalContextProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
