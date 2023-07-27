import axios from 'axios';

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
