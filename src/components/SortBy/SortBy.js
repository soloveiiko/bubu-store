import React from 'react';
export const sortByList = [
  { id: '1', name: 'За замовчуванням', code: 'default' },
  { id: '2', name: 'По популярності', code: 'popularity' },
  { id: '3', name: 'Дешевші', code: 'lowPrice' },
  { id: '4', name: 'Дорожчі', code: 'highPrice' },
];
const SortBy = ({ onSortChange }) => {
  const handleSortChange = (selectedSort) => {
    onSortChange(selectedSort);
  };
  return (
    <div>
      <ul>
        {sortByList.map((el) => (
          <li key={el.id} onClick={() => handleSortChange(el.id)}>
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortBy;
