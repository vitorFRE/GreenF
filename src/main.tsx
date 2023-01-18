import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from './Routes';
import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/ThemeStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyles />
      <Routes />
    </Theme>
  </React.StrictMode>,
);
