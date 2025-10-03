import { fetchCategories } from './products-api';
import { fetchCategories, fetchProduct, fetchProducts } from './products-api';
import {
  renderCategories,
  renderProduct,
  renderProducts,
} from './render-function';
import { openModal } from './modal.js';

export async function getCategories() {
  try {
    const categories = await fetchCategories();
    renderCategories(['All', ...categories]);
    const firstBtn = document.querySelector('.categories__btn');
    if (firstBtn) {
      firstBtn.classList.add('categories__btn--active');
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getProducts(currentPage){
  try {
    const products = await fetchProducts(currentPage);
    renderProducts(products);
  } catch (error) {
    console.log(error);
  }
}

export function categoriesOnClick () {
  
}


export async function getProducts(currentPage){
  try {
    const products = await fetchProducts(currentPage);
    renderProducts(products);
  } catch (error) {
    console.log(error);
  }
}
export async function getProduct(productId){
  try {
    const product = await fetchProduct(productId);
    renderProduct(product);
    openModal();
  } catch (error) {
    console.log(error);
  }
}
