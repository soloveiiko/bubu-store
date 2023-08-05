import React, { useState } from 'react';
import { searchLight, searchBold } from '../../assets';

const Search = ({ isButton = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="search">
      {!isButton ? (
        <>
          <input type="text" placeholder="Я шукаю..." />
          <span className="img-container">
            <img src={searchLight} alt="Search" />
          </span>
        </>
      ) : (
        <>
          <div onClick={toggleSearch} className="img-container">
            <img src={searchBold} alt="Search" />
          </div>
          {isOpen && <input type="text" placeholder="Я шукаю..." />}
        </>
      )}
    </div>
  );
};

export default Search;
