import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { catalogList } from '../../utils/data';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const CatalogMenu = (props) => {
  const [itemStates, setItemStates] = useState({});
  const toggleSubCatalog = (itemKey) => {
    setItemStates((prevState) => ({
      ...prevState,
      [itemKey]: !prevState[itemKey] || false,
    }));
  };

  return (
    <div className={`catalog ${props.isOpenCatalog ? 'open' : ''}`}>
      <button className="catalog-button" onClick={props.toggleButton}>
        <span className="catalog-logo"></span>
        <span className="subtitle">Каталог</span>
      </button>
      {props.isMobile ? (
        <>
          {props.isOpenCatalog && (
            <div className="catalog-container">
              <button className="close-btn" onClick={props.toggleButton}>
                <MdOutlineArrowBackIosNew className="catalog-arrow" /> <span className="subtitle">Меню</span>
              </button>
              <ul className="catalog-list">
                {catalogList.map((el) => (
                  <li key={el.id} className="catalog-item" onClick={() => toggleSubCatalog(el.id)}>
                    <img src={el.logo} alt={el.name} />
                    <span>{el.name}</span>
                    {itemStates[el.id] && (
                      <div className="subcatalog">
                        <button className="close-btn" onClick={() => toggleSubCatalog({})}>
                          <MdOutlineArrowBackIosNew className="catalog-arrow" />{' '}
                          <span className="subtitle">Каталог</span>
                        </button>
                        <ul className="subcatalog-list">
                          {el.categories.map((item) => (
                            <li key={item.id} className="subcatalog-item" onClick={props.toggleMenu}>
                              <Link to={item.link}>{item.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <>
          {props.isOpenCatalog && (
            <div className="catalog-container">
              <ul className="catalog-list">
                {catalogList.map((el) => (
                  <li key={el.id} className="catalog-item">
                    <Link to={el.link}>
                      <img src={el.logo} alt={el.name} />
                      <span>{el.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CatalogMenu;
