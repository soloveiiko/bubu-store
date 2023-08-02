import React, { useState } from 'react';
import { search, searchXl } from '../../assets';

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
            <img src={search} alt="Search" />
          </span>
        </>
      ) : (
        <>
          <div onClick={toggleSearch} className="img-container">
            <img src={searchXl} alt="Search" />
          </div>
          {isOpen && <input type="text" placeholder="Я шукаю..." />}
        </>
      )}
    </div>
  );
};

export default Search;
