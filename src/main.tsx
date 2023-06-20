import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from './Routes';
import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/ThemeStyles';
import { AuthProvider } from './hooks/auth';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Theme>
  </React.StrictMode>,
);
