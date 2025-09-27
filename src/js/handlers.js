import { fetchCategories } from './products-api';
import { renderCategories } from './render-function';

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
