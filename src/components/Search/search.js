import React from 'react';
import { search } from '../../assets';

const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Я шукаю..." />
      <img src={search} alt="search" />
    </div>
  );
};

export default Search;
