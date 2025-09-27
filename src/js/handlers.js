import iziToast from 'izitoast';
import { activeFirstBtn, checkData, checkOnEmpty } from './helpers';
import {
  fetchCategories,
  fetchProducts,
  fetchSearchProducts,
} from './products-api';
import {
  clearProducts,
  renderCategories,
  renderProducts,
} from './render-function';
import { refs } from './refs';

export async function getCategories() {
  try {
    const categories = await fetchCategories();
    renderCategories(['All', ...categories]);
    activeFirstBtn();
  } catch (error) {
    console.log(error);
  }
}

export async function getProducts(currentPage) {
  try {
    const products = await fetchProducts(currentPage);
    renderProducts(products);
  } catch (error) {
    console.log(error);
  }
}

export async function getSearchProdacts(event) {
  event.preventDefault();
  clearProducts();

  try {
    const q = event.target.elements.searchValue.value.trim();

    if (checkOnEmpty(q)) {
      return;
    }
    const foundProducts = await fetchSearchProducts(q);
    console.log(foundProducts);

    if (checkData(foundProducts)) {
      return;
    }

    renderProducts(foundProducts);
  } catch (error) {
    console.log(error);
  }
}

export async function formCloseBtn() {
  refs.searchInput.value = '';
  clearProducts();
  await getProducts(1);
}
