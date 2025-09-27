import { refs } from './refs';

export function renderCategories(data) {
  const markup = data
    .map(
      el => `<li class="categories__item">
   <button class="categories__btn" type="button">${el}</button>
 </li>`
    )
    .join('');
  refs.categoryList.innerHTML = markup;
}

export function renderProducts(data) {
  const markup = data.products
    .map(
      product =>
        `<li class="products__item" data-id="${product.id}">
    <img class="products__image" src="${product.thumbnail}" alt="product image"/>
    <p class="products__title">${product.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: </span>${product.brand}</p>
    <p class="products__category">Category: ${product.category}</p>
    <p class="products__price">Price: $${product.price}</p>
 </li>`
    )
    .join('');
  refs.productList.insertAdjacentHTML('beforeend', markup);
}

export function clearProducts() {
  refs.productList.innerHTML = '';
}

export function renderProduct(data) {
  const markup =
        `<img class="modal-product__img" src="${data.images[0]}" alt="Product photo for ${data.title}" />
        <div class="modal-product__content">
          <p class="modal-product__title">${data.title}</p>
          <ul class="modal-product__tags"></ul>
          <p class="modal-product__description">${data.description}</p>
          <p class="modal-product__shipping-information">Shipping: ${data.shippingInformation}</p>
          <p class="modal-product__return-policy">Return Policy: ${data.returnPolicy}</p>
          <p class="modal-product__price">Price: $${data.price}</p>
          <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>`;
  refs.modalProduct.innerHTML = markup;
}
