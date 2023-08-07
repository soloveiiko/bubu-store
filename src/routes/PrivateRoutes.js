import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CatalogPage, MainPage, NoAccessPage, NotFoundPage, ProductPage } from '../pages';

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/catalog/:id" element={<CatalogPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/403" element={<NoAccessPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default PrivateRoutes;
