import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import GlobalStyle from 'styles/global';
import { store } from './redux/store';
import Router from "./router";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ThemeProvider from "styles/themes";


const container = document.getElementById('root');
const root = createRoot(container);
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer position="top-center" />
      <GlobalStyle />
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

