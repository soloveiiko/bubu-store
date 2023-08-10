import axios from 'axios';
import { brandsList, catalogList, discountList, popularCategory, producersList, productsList } from '../utils/data';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    'API-KEY': '',
  },
});
export const authAPI = {
  me() {
    return instance.post('users/1');
  },
  login() {
    return instance.post('users');
  },
  signup() {
    return instance.post('users');
  },
};
export const commentsAPI = {
  getComments() {
    return instance.get('comments');
  },
  setComments() {
    return instance.post('comments');
  },
};

const fetchDataFromServer = async (data) => {
  try {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 100);
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const fetchProductData = async () => {
  return fetchDataFromServer(productsList);
};

export const fetchBrandsData = async () => {
  return fetchDataFromServer(brandsList);
};

export const fetchProducerData = async () => {
  return fetchDataFromServer(producersList);
};

export const fetchCatalogData = async () => {
  return fetchDataFromServer(catalogList);
};
export const fetchDiscountData = async () => {
  return fetchDataFromServer(discountList);
};
export const fetchPopularCategoryData = async () => {
  return fetchDataFromServer(popularCategory);
};
