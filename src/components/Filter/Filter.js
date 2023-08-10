import React, { useState } from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';
import PriceRange from './PriceRange/PriceRange';

const Filter = (props) => {
  const [minPriceFilter, setMinPriceFilter] = useState(props.minPrice);
  const [maxPriceFilter, setMaxPriceFilter] = useState(props.maxPrice);

  const handleCategoryFilter = (category) => {
    const selectedCategory = props.catalog.categories.find((el) => el.code === category.code);
    props.onCategoryFilter(selectedCategory.code);
  };
  const handleAvailableFilter = (isAvailable) => {
    props.onAvailableFilter(isAvailable);
  };
  const handleDiscountFilter = (isDiscount) => {
    props.onDiscountFilter(isDiscount);
  };
  const handleProducerFilter = (producer) => {
    props.onProducerFilter(producer);
  };
  const handlePriceFilter = () => {
    props.onPriceFilter({ min: minPriceFilter, max: maxPriceFilter });
  };
  return (
    <div className="filter">
      <h2 className="headline">{props.catalog.name}</h2>
      <div className="categories-filter">
        <div className="filter-item">
          <div className="title-wrapper">
            <h4 className="title">Категорія</h4>
            <RiArrowUpSLine />
          </div>
        </div>
        <ul className="categories-filter-list">
          {props.catalog.categories.map((el) => (
            <li key={el.id} className="categories-filter-item" onClick={() => handleCategoryFilter(el)}>
              {el.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="available-filter">
        <input
          type="checkbox"
          id="isAvailable"
          checked={props.isAvailable}
          onChange={(e) => handleAvailableFilter(e.target.checked)}
        />
        <label htmlFor="isAvailable">В наявності</label>
      </div>
      <div className="discount-filter">
        <input
          type="checkbox"
          id="isDiscount"
          checked={props.isDiscount}
          onChange={(e) => handleDiscountFilter(e.target.checked)}
        />
        <label htmlFor="isDiscount">Зі знижкою</label>
      </div>
      <div className="price-filter">
        <div className="filter-item">
          <div className="title-wrapper">
            <h4 className="title">Ціна</h4>
            <RiArrowUpSLine />
          </div>
        </div>
        <PriceRange
          min={props.minPrice}
          max={props.maxPrice}
          onChange={({ min, max }) => {
            setMinPriceFilter(min);
            setMaxPriceFilter(max);
          }}
          onPriceFilter={handlePriceFilter}
        />
      </div>
      <div className="producer-filter">
        <div className="filter-item">
          <div className="title-wrapper">
            <h4 className="title">Виробник</h4>
            <RiArrowUpSLine />
          </div>
        </div>
        {props.producers.map((el) => (
          <div key={el.id}>
            <input
              type="checkbox"
              id={el.code}
              checked={props.selectedProducers.includes(el.name)}
              onChange={() => handleProducerFilter(el)}
            />
            <label htmlFor={el.code}>{el.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
