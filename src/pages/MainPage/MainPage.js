import React from 'react';
import DiscountSlider from '../../components/DiscountSlider/DiscountSlider';
import PromotionsSlider from '../../components/PromotionsSlider';
import PopularCategory from '../../components/PopularCategory';
import Brands from '../../components/Brands';
import BrowsingHistory from '../../components/BrowsingHistory';

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
