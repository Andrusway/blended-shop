import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { refs } from './refs';

export function activeFirstBtn() {
  const firstBtn = document.querySelector('.categories__btn');
  if (firstBtn) {
    firstBtn.classList.add('categories__btn--active');
  }
}

export function checkOnEmpty(req) {
  if (!req) {
    iziToast.error({
      message: 'Please, fill request!',
      position: 'topCenter',
      timeout: 3000,
      progressBar: false,
      backgroundColor: 'red',
      maxWidth: '600px',
      close: false,
      icon: '',
    });
    return true;
  }
}

export function checkData(foundProducts) {
  if (!foundProducts.products.length) {
    refs.divNotFound.classList.add('not-found--visible');
    return true;
  } else {
    refs.divNotFound.classList.remove('not-found--visible');
  }
}
