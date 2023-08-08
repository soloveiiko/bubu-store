import React, { useEffect, useState } from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';
import { FiArrowRight } from 'react-icons/fi';
import { fetchProducerData } from '../../api/api';
import { useDispatch } from 'react-redux';
import { getProductsData } from '../../redux/products/action';

const Filter = ({ catalog }) => {
  // const [producer, setProducer] = useState([]);
  // const [category, setCategory] = useState([]);
  const dispatch = useDispatch();
  // const [activeFilters, setActiveFilters] = useState({
  //   isAvailable: false,
  //   isDiscount: false,
  // });

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     // const producerData = await fetchProducerData();
    //     // setProducer(producerData);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    //
    // fetchData();
    dispatch(getProductsData());
  }, [dispatch]);

  const categoryFilter = (category) => {
    const newItem = catalog.categories.find((el) => el.code === category.code);
    if (newItem) {
      applyFilters({ category: newItem.code });
    }
  };

  const applyFilters = (filters) => {
    dispatch(getProductsData(filters));
    debugger;
    console.log('filters', filters);
  };
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
            <li key={el.id} className="categories-filter-item" onClick={() => categoryFilter(el)}>
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
