import React from 'react';
import { useSelector } from 'react-redux';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

const AppRoutes = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <>
      {/*<Routes>*/}
      {/*  <Route path="/" element={<MainPage />} />*/}
      {/*  <Route path="/signin" element={<SignInPage />} />*/}
      {/*  <Route path="/signup" element={<SignUpPage />} />*/}
      {/*  <Route path="/catalog" element={<CatalogPage />} />*/}
      {/*  <Route path="/product/:id" element={<ProductPage />} />*/}
      {/*  <Route path="/403" element={<NoAccessPage />} />*/}
      {/*  <Route path="*" element={<NotFoundPage />} />*/}
      {/*</Routes>*/}
      {!isAuth ? <PublicRoutes /> : <PrivateRoutes />}
    </>
  );
};

export default AppRoutes;
