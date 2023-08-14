import React from 'react';
import { DiscountSlider, PromotionsSlider, PopularCategory, BrandsSlider, BrowsingHistory } from '../../components';
import { useSelector } from 'react-redux';

const MainPage = () => {
  const recentlyViewedProducts = useSelector((state) => state.history.products);
  return (
    <div className="main-page page">
      <DiscountSlider />
      <PromotionsSlider />
      <PopularCategory />
      <BrandsSlider />
      {recentlyViewedProducts.length > 0 && <BrowsingHistory recentlyViewedProducts={recentlyViewedProducts} />}
    </div>
  );
};

export default MainPage;
