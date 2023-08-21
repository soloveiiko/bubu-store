import React from 'react';
import Slider from 'react-slick';
import { brandsList } from '../../utils/data';
import { MoreActions, NextArrow } from '../commons';

const BrandsSlider = () => {
  const numSlides = brandsList.length;

  const settings = {
    infinite: numSlides > 7,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: numSlides > 5,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: numSlides > 4,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 479,
        settings: {
          infinite: numSlides > 3,
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div className="brands-slider">
      <div className="brands-slider__container container">
        <h2 className="brands-slider__headline headline">Популярні бренди</h2>
        <Slider {...settings}>
          {brandsList.map((el) => (
            <div key={el.id} className="brands-slider__img-container img-container">
              <img src={el.image} alt={el.name} />
            </div>
          ))}
        </Slider>
        <div className="brands-slider__description">
          <p>
            Інтернет-магазин дитячих товарів Бу-Бу - зона комфорту малюків і їх батьків. Наш асортимент розроблений в
            діапазоні "від народження до школи", завдяки чому кожен етап розвитку вашої дитини буде максимально
            правильним, а головне, цікавим і радісним.
          </p>
          <p>
            Товари для дітей - особлива категорія продукції, тому ми довіряємо тільки перевіреним виробникам та брендам,
            які давно і успішно представлені на світовому ринку. Магазин Бу-Бу є дистриб'ютором таких брендів: Anex,
            X-lander, Leonardo, Bebe Confort, Welldon, Huffy, Fun Time, Lexus Trike, Nino, Maltex, Ceba baby, X-rider,
            Play WOW, Miniland, Casato, Klups, Radir, Keenway, Adamex, Roan, Tako.
          </p>
          <p>
            На сайті інтернет магазину Бу-Бу ви можете купити товари для дітей абсолютно різних категорій, в залежності
            від потреб: дитячі коляски, дитяча кімната, стільці і шезлонги, все для годування, гігієна та догляд,
            автокрісла, дитячий транспорт, іграшки, дитячий одяг.
          </p>
        </div>
        <MoreActions title="Докладніше" />
      </div>
    </div>
  );
};

export default BrandsSlider;
