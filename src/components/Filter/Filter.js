import React, { useState } from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';
import PriceRange from './PriceRange/PriceRange';
import CloseButton from '../commons/CloseButton/CloseButton';
import { filter } from './../../assets';
import AppliedFilters from './AppliedFilters/AppliedFilters';

const Filter = (props) => {
  const [minPriceFilter, setMinPriceFilter] = useState(props.minPrice);
  const [maxPriceFilter, setMaxPriceFilter] = useState(props.maxPrice);
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [producerOpen, setProducerOpen] = useState(true);
  const handleCategoryFilter = (category) => {
    const selectedCategory = props.catalog.categories.find((el) => el.name === category.name);
    props.onCategoryFilter(selectedCategory.name);
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
  const toggleIsOpen = (setIsOpen, isOpen) => {
    setIsOpen(!isOpen);
  };
  const applyFilters = () => {
    props.onApplyFilters(
      props.selectedCategory,
      props.isAvailable,
      props.isDiscount,
      props.selectedProducers,
      minPriceFilter,
      maxPriceFilter
    );
    props.toggleIsOpen(false);
    console.log(props);
  };
  return (
    <div className={`filter ${props.isOpen ? 'open' : ''}`}>
      {props.isTablet && (
        <div className="tablet-filter">
          <CloseButton onClick={props.toggleIsOpen} />
          <div className="filter-button" onClick={props.toggleIsOpen}>
            <img src={filter} alt="Filter" />
            <span>Фільтр</span>
          </div>
          <AppliedFilters selectedFilters={props.selectedFilters} handleRemoveFilter={props.handleRemoveFilter} />
        </div>
      )}
      <div className="filter-container">
        <div className="categories-filter">
          <div className="filter-item">
            <div
              className={`title-wrapper ${categoriesOpen ? 'open' : ''}`}
              onClick={() => toggleIsOpen(setCategoriesOpen, categoriesOpen)}
            >
              <h4 className="title">Категорія</h4>
              <RiArrowUpSLine />
            </div>
          </div>
          {categoriesOpen && (
            <ul className="categories-filter-list">
              {props.catalog.categories.map((el) => (
                <li key={el.id} className="categories-filter-item" onClick={() => handleCategoryFilter(el)}>
                  {el.name}
                </li>
              ))}
            </ul>
          )}
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
            <div
              className={`title-wrapper ${priceOpen ? 'open' : ''}`}
              onClick={() => toggleIsOpen(setPriceOpen, priceOpen)}
            >
              <h4 className="title">Ціна</h4>
              <RiArrowUpSLine />
            </div>
          </div>
          {priceOpen && (
            <PriceRange
              min={props.minPrice}
              max={props.maxPrice}
              onChange={({ min, max }) => {
                setMinPriceFilter(min);
                setMaxPriceFilter(max);
              }}
              onPriceFilter={handlePriceFilter}
            />
          )}
        </div>
        <div className="producer-filter">
          <div className="filter-item">
            <div
              className={`title-wrapper ${producerOpen ? 'open' : ''}`}
              onClick={() => toggleIsOpen(setProducerOpen, producerOpen)}
            >
              <h4 className="title">Виробник</h4>
              <RiArrowUpSLine />
            </div>
          </div>
          {producerOpen && (
            <>
              {' '}
              {props.producers.map((el) => (
                <div className="producer-item" key={el.id}>
                  <input
                    type="checkbox"
                    id={el.code}
                    checked={props.selectedProducers.includes(el.name)}
                    onChange={() => handleProducerFilter(el)}
                  />
                  <label htmlFor={el.code}>{el.name}</label>
                </div>
              ))}
            </>
          )}
        </div>
        {props.isTablet && (
          <div className="apply-filters-button">
            <button onClick={applyFilters}>Застосувати</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
