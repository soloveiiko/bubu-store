import React from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';

const Filter = ({ catalog, categoriesFilter }) => {
  return (
    <div className="filter">
      <h2 className="headline">{catalog.name}</h2>
      <div className="categories-filter">
        <div className="categories-title">
          <h4>Категорія</h4>
          <RiArrowUpSLine />
        </div>
        <ul className="categories-filter-list">
          {catalog.categories.map((el) => (
            <li key={el.id} className="categories-filter-item" onClick={() => categoriesFilter(el)}>
              {el.name}
            </li>
          ))}
        </ul>
      </div>
      {/*<div>*/}
      {/*  <input type="checkbox" id="isAvailable" onClick={() => isAvailableFilter()} />*/}
      {/*  <label htmlFor="isAvailable">В наявності</label>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <input type="checkbox" id="isDiscount" />*/}
      {/*  <label htmlFor="isDiscount">Зі знижкою</label>*/}
      {/*</div>*/}
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
      {/*<div>*/}
      {/*  {producer.map((el) => (*/}
      {/*    <div key={el.id}>*/}
      {/*      <input type="checkbox" id={el.code} />*/}
      {/*      <label htmlFor={el.code}>{el.name}</label>*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  );
};

export default Filter;
