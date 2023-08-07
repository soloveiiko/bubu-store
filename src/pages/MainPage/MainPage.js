import React from 'react';
import { DiscountSlider, PromotionsSlider, PopularCategory, Brands, BrowsingHistory } from '../../components';

const MainPage = () => {
  return (
    <div>
      <DiscountSlider />
      <PromotionsSlider />
      <PopularCategory />
      <Brands />
      <BrowsingHistory />
    </div>
  );
};

export default MainPage;
