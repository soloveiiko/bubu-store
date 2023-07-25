import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage, NoAccessPage, NotFoundPage, SignInPage, SignUpPage } from '../pages';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/403" element={<NoAccessPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default PublicRoutes;
