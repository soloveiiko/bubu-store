import React from 'react';
import { popularCategory } from '../../utils/data';

const PopularCategory = () => {
  return (
    <div className="popular-category">
      <div className="container">
        <h2 className="headline">Популярні Категорії</h2>
        <div className="category-container">
          {popularCategory.map((el) => (
            <div key={el.id} className={`category-item ${el.className}`}>
              <span className="category-name">{el.name}</span>
              <img src={el.image} alt={el.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
