import React, { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
export const sortByList = [
  { id: '1', name: 'За замовчуванням', code: 'default' },
  { id: '2', name: 'По популярності', code: 'popularity' },
  { id: '3', name: 'Дешевші', code: 'lowPrice' },
  { id: '4', name: 'Дорожчі', code: 'highPrice' },
];
const SortBy = ({ onSortChange, isMobile }) => {
  const [selectedSort, setSelectedSort] = useState(sortByList[0].id);
  const [isOpen, setIsOpen] = useState(false);

  const handleSortChange = (selectedSort) => {
    setSelectedSort(selectedSort);
    onSortChange(selectedSort);
  };
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="sort-by">
      {isMobile ? (
        <div className={`sort-by-select ${isOpen ? 'open' : ''}`} tabIndex="0">
          <span className="selected-item" onClick={toggleIsOpen}>
            {sortByList.find((el) => el.id === selectedSort)?.name}
            <SlArrowDown />
          </span>
          <ul className="sort-by-options">
            {sortByList.map((el) => (
              <li
                className={`sort-by-option ${selectedSort === el.id ? 'selected' : ''}`}
                key={el.id}
                onClick={() => handleSortChange(el.id)}
              >
                {el.name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul className="sort-by-list">
          {sortByList.map((el) => (
            <li
              className={`sort-by-item ${selectedSort === el.id ? 'selected' : ''}`}
              key={el.id}
              onClick={() => handleSortChange(el.id)}
            >
              {el.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortBy;
