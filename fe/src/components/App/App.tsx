import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { ThemeProvider } from "styled-components";
import { ModalContextProvider } from "../../Context/ModalContext/ModalContext";

import { Layout } from "../Layout/Layout";

import { GlobalStyles } from "../../assets/styles/GlobalStyles";

import theme from "../../assets/styles/theme";
import { AppointmentContextProvider } from "../../Context/AppointmentContext/AppointmentContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppointmentContextProvider>
          <ModalContextProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyles />

              <Layout />
            </ThemeProvider>
          </ModalContextProvider>
        </AppointmentContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
