import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginCreate } from '../Pages/Login/LoginCreate';
import { LoginForm } from '../Pages/Login/LoginForm';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/criar" element={<LoginCreate />} />
    </Routes>
  );
};
