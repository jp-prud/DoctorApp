import {ThemeProvider} from 'styled-components/native';

import TabAppRoutes from '@routes/tab-app.routes';

import {RenderModalProvider} from '@context/ModalContext/index';

import theme from '@theme/index';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RenderModalProvider>
        <TabAppRoutes />
      </RenderModalProvider>
    </ThemeProvider>
  );
}
