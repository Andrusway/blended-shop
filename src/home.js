import {
  getCategories,
  getProducts,
  getSearchProdacts,
  formCloseBtn,
} from './js/handlers';
import { refs } from './js/refs';

//Логіка сторінки Home
getCategories();
getProducts(1);

refs.formRequest.addEventListener('submit', getSearchProdacts);
refs.clearBtn.addEventListener('click', formCloseBtn);
