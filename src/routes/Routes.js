import React from 'react';
import { Route } from 'react-router-dom';
import { CatalogPage, MainPage, NoAccessPage, NotFoundPage, ProductPage, SignInPage, SignUpPage } from '../pages';

const Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/403" element={<NoAccessPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Routes;
