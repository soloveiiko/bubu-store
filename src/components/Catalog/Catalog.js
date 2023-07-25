import React from 'react';
import { Link } from 'react-router-dom';
const catalogList = [
  { key: 'carriages', name: 'Дитячі коляски', link: '#' },
  { key: 'room', name: 'Дитяча кімната', link: '#' },
  { key: 'chairs', name: 'Стільці і шезлонги\n', link: '#' },
  { key: 'feeding', name: 'Для годування', link: '#' },
  { key: 'care', name: 'Гігієна і догляд', link: '#' },
  { key: 'carseats', name: 'Автокрісла', link: '#' },
  { key: 'transport', name: 'Дитячий транспорт', link: '#' },
  { key: 'toys', name: 'Іграшки', link: '#' },
  { key: 'clothes', name: 'Одяг', link: '#' },
  { key: 'product', name: 'Новий товар', link: '#' },
];
const Catalog = () => {
  return (
    <ul>
      {catalogList.map((el) => (
        <li key={el.key}>
          <Link to={el.link}>{el.name}</Link>>
        </li>
      ))}
    </ul>
  );
};

export default Catalog;
