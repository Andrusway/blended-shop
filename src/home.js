import { getCategories, getProduct, getProducts } from './js/handlers';
import { refs } from './js/refs.js';
import { closeModal, openModal } from './js/modal.js';

//Логіка сторінки Home
getCategories();
getProducts(1);

refs.categoryList.addEventListener('click' ,  (event) => {
    if(!event.target.classList("categories__btn")) {return}

    
  })
refs.productList.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) return;
  const productId = e.target.closest('.products__item').dataset.id;

  getProduct(productId);
  // openModal();
})

refs.modal.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal();
})

refs.modalCloseBtn.addEventListener('click', (e) => {
  closeModal();
})
