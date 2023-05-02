import {ThemeProvider} from 'styled-components/native';

import {AppNavigationRoutes} from '@routes/app-navigation.routes';

import {AuthContextProvider} from '@context/AuthContext';
import {ModalContextProvider} from '@context/ModalContext/index';

import theme from '@theme/index';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <ModalContextProvider>
          <AppNavigationRoutes />
        </ModalContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}
