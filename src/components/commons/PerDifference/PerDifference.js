import React from 'react';

const PerDifference = ({ product }) => {
  const perDifference = (prevPrice, currPrice) => {
    return Math.floor(((prevPrice - currPrice) * 100) / prevPrice);
  };
  return <span>-{perDifference(product.price, product.discount.price)}%</span>;
};

export default PerDifference;
