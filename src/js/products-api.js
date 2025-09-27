import axios from 'axios';
import { BASE_URL, ENDPOINTS, PER_PAGE } from './constants';

axios.defaults.baseURL = BASE_URL;

export async function fetchCategories() {
  const { data } = await axios(`${ENDPOINTS.CATEGORIES}`);
  return data;
}


export async function fetchProducts(currentPage) {
  const parameters = {
    params: {
      skip: (currentPage - 1) * PER_PAGE,
      limit: PER_PAGE,
    },
  };
  const { data } = await axios(ENDPOINTS.PRODUCTS, parameters);
  return data;
}


export async function fetchSearchProducts(product) {
  const { data } = await axios(`${ENDPOINTS.SEARCH_PRODUCT}q=${product}`);
  return data;
}


