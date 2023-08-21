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
    <div className={`catalog-menu ${props.isOpenCatalog ? 'open' : ''}`}>
      <button className="catalog-menu__btn" onClick={props.toggleButton}>
        <span className="catalog-menu__logo"></span>
        <span className="catalog-menu__subtitle subtitle">Каталог</span>
      </button>
      {props.isMobile ? (
        <>
          {props.isOpenCatalog && (
            <div className="catalog-menu__container">
              <button className="catalog-menu__close-btn close-btn" onClick={props.toggleButton}>
                <MdOutlineArrowBackIosNew className="catalog-menu__arrow" />{' '}
                <span className="catalog-menu__subtitle subtitle">Меню</span>
              </button>
              <ul className="catalog-menu__list">
                {catalogList.map((el) => (
                  <li key={el.id} className="catalog-menu__item" onClick={() => toggleSubCatalog(el.id)}>
                    <img src={el.logo} alt={el.name} />
                    <span>{el.name}</span>
                    {itemStates[el.id] && (
                      <div className="catalog-menu__subcatalog subcatalog">
                        <button className="subcatalog__close-btn close-btn" onClick={() => toggleSubCatalog({})}>
                          <MdOutlineArrowBackIosNew className="subcatalog__arrow" />{' '}
                          <span className="subcatalog__subtitle subtitle">Каталог</span>
                        </button>
                        <ul className="subcatalog__list">
                          {el.categories.map((item) => (
                            <li key={item.id} className="subcatalog__item" onClick={props.toggleMenu}>
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
            <div className="catalog-menu__container">
              <ul className="catalog-menu__list">
                {catalogList.map((el) => (
                  <li key={el.id} className="catalog-menu__item">
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
