import React from 'react';
import Slider from 'react-slick';
import { brands } from '../../utils/data';
import { NextArrow } from '../Arrows';
import { Link } from 'react-router-dom';

const Brands = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div>
      <h2 className="headline">Популярні бренди</h2>
      <Slider {...settings}>
        {brands.map((el) => (
          <div key={el.id}>
            <img src={el.image} alt={el.name} />
          </div>
        ))}
      </Slider>
      <div className="description">
        Інтернет-магазин дитячих товарів Бу-Бу - зона комфорту малюків і їх батьків. Наш асортимент розроблений в
        діапазоні "від народження до школи", завдяки чому кожен етап розвитку вашої дитини буде максимально правильним,
        а головне, цікавим і радісним. Товари для дітей - особлива категорія продукції, тому ми довіряємо тільки
        перевіреним виробникам та брендам, які давно і успішно представлені на світовому ринку. Магазин Бу-Бу є
        дистриб'ютором таких брендів: Anex, X-lander, Leonardo, Bebe Confort, Welldon, Huffy, Fun Time, Lexus Trike,
        Nino, Maltex, Ceba baby, X-rider, Play WOW, Miniland, Casato, Klups, Radir, Keenway, Adamex, Roan, Tako. На
        сайті інтернет магазину Бу-Бу ви можете купити товари для дітей абсолютно різних категорій, в залежності від
        потреб: дитячі коляски, дитяча кімната, стільці і шезлонги, все для годування, гігієна та догляд, автокрісла,
        дитячий транспорт, іграшки, дитячий одяг.
      </div>
      <Link to="#">Докладніше</Link>
    </div>
  );
};

export default Brands;
