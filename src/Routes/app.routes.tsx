import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { App } from '../Pages/App';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
};
