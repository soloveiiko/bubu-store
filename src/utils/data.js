import {
  autochair,
  car,
  carriage,
  chair,
  clothes,
  comparison,
  facebook,
  favorite,
  feeding,
  instagram,
  newThings,
  room,
  soap,
  toy,
  cart,
  youtube,
} from '../assets';

export const langList = [
  { key: 'ukrainian', code: 'Укр' },
  { key: 'english', code: 'Англ' },
];
export const navHeaderList = [
  { key: 'aboutUs', name: 'Про нас', link: '#' },
  { key: 'contacts', name: 'Контакти', link: '#' },
  { key: 'delivery', name: 'Доставка і оплата', link: '#' },
  { key: 'returns', name: 'Повернення і обмін', link: '#' },
];
export const navFooterList = [
  { key: 'aboutUs', name: 'Про нас', link: '#' },
  { key: 'contacts', name: 'Контакти', link: '#' },
  { key: 'delivery', name: 'Доставка і оплата', link: '#' },
  { key: 'returns', name: 'Повернення і обмін', link: '#' },
  { key: 'security', name: 'Політика конфеденційності', link: '#' },
];
export const additionList = [
  { key: 'comparison', className: 'comparison', logo: comparison, counter: 0 },
  { key: 'favorite', className: 'favorite', logo: favorite, counter: 0 },
  { key: 'cart', className: 'cart', logo: cart, counter: 0 },
];
export const catalogList = [
  {
    key: 'carriage',
    name: 'Дитячі коляски',
    link: '#',
    logo: carriage,
    subList: [
      { key: 'carriages', name: 'Коляски 2 в 1', link: '#' },
      { key: 'envelopes', name: 'Зимові конверти', link: '#' },
      { key: 'components', name: 'Аксесуари та комплектуючі', link: '#' },
      { key: 'couplings', name: 'Муфти', link: '#' },
    ],
  },
  {
    key: 'room',
    name: 'Дитяча кімната',
    link: '#',
    logo: room,
    subList: [
      { key: 'test1', name: 'test1', link: '#' },
      { key: 'test2', name: 'test2', link: '#' },
    ],
  },
  {
    key: 'chair',
    name: 'Стільці і шезлонги',
    link: '#',
    logo: chair,
    subList: [
      { key: 'test1', name: 'test1', link: '#' },
      { key: 'test2', name: 'test2', link: '#' },
    ],
  },
  {
    key: 'feeding',
    name: 'Для годування',
    link: '#',
    logo: feeding,
    subList: [
      { key: 'test1', name: 'test1', link: '#' },
      { key: 'test2', name: 'test2', link: '#' },
    ],
  },
  {
    key: 'soap',
    name: 'Гігієна і догляд',
    link: '#',
    logo: soap,
    subList: [
      { key: 'test1', name: 'test1', link: '#' },
      { key: 'test2', name: 'test2', link: '#' },
    ],
  },
  {
    key: 'autochair',
    name: 'Автокрісла',
    link: '#',
    logo: autochair,
    subList: [
      { key: 'test1', name: 'test1', link: '#' },
      { key: 'test2', name: 'test2', link: '#' },
    ],
  },
  {
    key: 'car',
    name: 'Дитячий транспорт',
    link: '#',
    logo: car,
    subList: [
      { key: 'test1', name: 'test1', link: '#' },
      { key: 'test2', name: 'test2', link: '#' },
    ],
  },
  {
    key: 'toy',
    name: 'Іграшки',
    link: '#',
    logo: toy,
    subList: [
      { key: 'test1', name: 'test1', link: '#' },
      { key: 'test2', name: 'test2', link: '#' },
    ],
  },
  {
    key: 'clothes',
    name: 'Одяг',
    link: '#',
    logo: clothes,
    subList: [
      { key: 'test1', name: 'test1', link: '#' },
      { key: 'test2', name: 'test2', link: '#' },
    ],
  },
  {
    key: 'newThings',
    name: 'Новий товар',
    link: '#',
    logo: newThings,
    subList: [
      { key: 'test1', name: 'test1', link: '#' },
      { key: 'test3', name: 'test3', link: '#' },
    ],
  },
];
export const socialNetworkList = [
  { key: 'instagram', name: 'instagram', logo: instagram, link: '#' },
  { key: 'youtube', name: 'youtube', logo: youtube, link: '#' },
  { key: 'facebook', name: 'facebook', logo: facebook, link: '#' },
];
