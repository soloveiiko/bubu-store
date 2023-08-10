import React from 'react';
import { DiscountSlider, PromotionsSlider, PopularCategory, BrandsSlider, BrowsingHistory } from '../../components';

const MainPage = () => {
  return (
    <div>
      <DiscountSlider />
      <PromotionsSlider />
      <PopularCategory />
      <BrandsSlider />
      <BrowsingHistory />
    </div>
  );
};

export default MainPage;
