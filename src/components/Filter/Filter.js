import React from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';

const Filter = (props) => {
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
    // const updatedSelectedProducers = props.selectedProducers.includes(producer.name)
    //   ? props.selectedProducers.filter((el) => el.name !== producer)
    //   : [...props.selectedProducers, producer.name];

    props.onProducerFilter(producer);
    console.log('producer', producer);
    // console.log('updatedSelectedProducers', updatedSelectedProducers);
  };

  return (
    <div className="filter">
      <h2 className="headline">{props.catalog.name}</h2>
      <div className="categories-filter">
        <div className="categories-title">
          <h4>Категорія</h4>
          <RiArrowUpSLine />
        </div>
        <ul className="categories-filter-list">
          {props.catalog.categories.map((el) => (
            <li key={el.id} className="categories-filter-item" onClick={() => handleCategoryFilter(el)}>
              {el.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <input
          type="checkbox"
          id="isAvailable"
          checked={props.isAvailable}
          onChange={(e) => handleAvailableFilter(e.target.checked)}
        />
        <label htmlFor="isAvailable">В наявності</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="isDiscount"
          checked={props.isDiscount}
          onChange={(e) => handleDiscountFilter(e.target.checked)}
        />
        <label htmlFor="isDiscount">Зі знижкою</label>
      </div>
      {/*<div>*/}
      {/*  <div>*/}
      {/*    <h3>Ціна</h3>*/}
      {/*    <RiArrowUpSLine />*/}
      {/*  </div>*/}
      {/*  <div>Slider</div>*/}
      {/*  <input type="text" />*/}
      {/*  -*/}
      {/*  <input type="text" />*/}
      {/*  <button>*/}
      {/*    <FiArrowRight />*/}
      {/*  </button>*/}
      {/*</div>*/}
      <div>
        <div className="producers-title">
          <h4>Виробник</h4>
          <RiArrowUpSLine />
        </div>
        {props.producers.map((el) => (
          <div key={el.id}>
            <input
              type="checkbox"
              id={el.code}
              checked={props.selectedProducers.includes(el.name)}
              onChange={(e) => handleProducerFilter(el)}
            />
            <label htmlFor={el.code}>{el.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
