import React from 'react';
import { Link } from 'react-router-dom';
import { catalogList } from '../../utils/data';

const Catalog = () => {
  return (
    <ul className="catalog-list">
      {catalogList.map((el) => (
        <li key={el.key} className="catalog-item">
          <Link to={el.link}>{el.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Catalog;
