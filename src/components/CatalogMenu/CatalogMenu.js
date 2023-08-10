import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { catalogList } from '../../utils/data';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const CatalogMenu = (props) => {
  const [isOpenCatalog, setIsOpenCatalog] = useState(false);
  const [itemStates, setItemStates] = useState({});
  const toggleButton = () => {
    setIsOpenCatalog((isOpenCatalog) => !isOpenCatalog);
  };
  const closeCatalog = () => {
    setIsOpenCatalog(false);
  };
  const toggleSubCatalog = (itemKey) => {
    setItemStates((prevState) => ({
      ...prevState,
      [itemKey]: !prevState[itemKey] || false,
    }));
  };

  return (
    <div className={`catalog ${isOpenCatalog ? 'open' : ''}`}>
      <button className="catalog-button" onClick={toggleButton}>
        <span className="catalog-logo"></span>
        Каталог
      </button>
      {props.isMobile ? (
        <>
          {isOpenCatalog && (
            <div className="catalog-container">
              <button className="close-btn" onClick={closeCatalog}>
                <MdOutlineArrowBackIosNew className="catalog-arrow" /> Меню
              </button>
              <ul className="catalog-list">
                {catalogList.map((el) => (
                  <li key={el.id} className="catalog-item" onClick={() => toggleSubCatalog(el.id)}>
                    <img src={el.logo} alt={el.name} />
                    <span>{el.name}</span>
                    {itemStates[el.id] && (
                      <div className="subcatalog">
                        <button className="close-btn" onClick={() => toggleSubCatalog({})}>
                          <MdOutlineArrowBackIosNew className="catalog-arrow" /> Каталог
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
          {isOpenCatalog && (
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
