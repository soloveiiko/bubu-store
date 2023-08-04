import React from 'react';
import { popularCategory } from '../../utils/data';

const PopularCategory = () => {
  return (
    <div>
      <h2 className="headline">Популярні Категорії</h2>
      {popularCategory.map((el) => (
        <div key={el.id}>
          <img src={el.image} alt={el.name} />
          <span>{el.name}</span>
        </div>
      ))}
    </div>
  );
};

export default PopularCategory;
