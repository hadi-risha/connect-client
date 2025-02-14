import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import { store } from './redux/store';
import ChatProvider from './context/ChatProvider';
import { UserDataProvider } from './context/userDataProvider.js' 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme/theme.js";

import { useMemo } from "react";


const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const RootComponent = () => {
  const mode = "light"; // Replace with dynamic mode logic if needed
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ChakraProvider>
            <Router>
              <QueryClientProvider client={queryClient}>
                <UserDataProvider>
                <ChatProvider>
                  <App />
                </ChatProvider>
                </UserDataProvider>
              </QueryClientProvider>
            </Router>
          </ChakraProvider>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
};

root.render(<RootComponent />)

