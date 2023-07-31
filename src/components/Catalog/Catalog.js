import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { catalogList } from '../../utils/data';

const Catalog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div className={`catalog ${isOpen ? 'open' : ''}`}>
      <button className="catalog-button" onClick={toggleMenu}>
        <span className="catalog-logo"></span>
        Каталог
      </button>
      {isOpen && (
        <div className="catalog-container">
          <ul className="catalog-list">
            {catalogList.map((el) => (
              <li key={el.key} className="catalog-item">
                <Link to={el.link}>
                  <img src={el.logo} alt={el.name} />
                  <span>{el.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Catalog;
