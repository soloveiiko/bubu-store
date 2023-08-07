import React, { useEffect, useState } from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';
import { FiArrowRight } from 'react-icons/fi';
import { fetchProducerData } from '../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsData } from '../../redux/products/action';

const Filter = ({ catalog }) => {
  const [producer, setProducer] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducerData();
        setProducer(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const categoryFilter = (category) => {
    debugger;
    const newItem = catalog.categories.find((el) => el.code === category);
    if (newItem) {
      dispatch(getProductsData({ category: newItem.code }));
    }
  };
  const isAvailableFilter = (isAvailable) => {};
  const isDiscountFilter = (isDiscount) => {};
  const priceFilter = (price) => {};
  const producerFilter = (producer) => {};

  return (
    <div>
      <h2 className="headline">{catalog.name}</h2>
      <div>
        <h4>Категорія</h4>
        <RiArrowUpSLine />
      </div>
      <ul>
        {catalog.categories.map((el) => (
          <li key={el.id} onClick={() => categoryFilter(el)}>
            {el.name}
          </li>
        ))}
      </ul>
      <div>
        <input type="checkbox" id="isAvailable" />
        <label htmlFor="isAvailable">В наявності</label>
      </div>
      <div>
        <input type="checkbox" id="isDiscount" />
        <label htmlFor="isDiscount">Зі знижкою</label>
      </div>
      <div>
        <div>
          <h3>Ціна</h3>
          <RiArrowUpSLine />
        </div>
        <div>Slider</div>
        <input type="text" />
        -
        <input type="text" />
        <button>
          <FiArrowRight />
        </button>
      </div>
      <div>
        {producer.map((el) => (
          <div key={el.id}>
            <input type="checkbox" id={el.code} />
            <label htmlFor={el.code}>{el.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
