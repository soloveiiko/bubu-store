import React from 'react';
import { popularCategory } from '../../utils/data';

const PopularCategory = () => {
  return (
    <div className="popular-category">
      <div className="popular-category__container container">
        <h2 className="popular-category__headline headline">Популярні Категорії</h2>
        <div className="popular-category__list">
          {popularCategory.map((el) => (
            <div key={el.id} className={`popular-category__item ${el.className}`}>
              <span className="popular-category__name">{el.name}</span>
              <img src={el.image} alt={el.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
