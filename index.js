import"./assets/styles-JE8YjOlG.js";import{a as r}from"./assets/vendor-N5iQpiFS.js";const l="https://dummyjson.com",a=12,d="modal--is-open",s={CATEGORIES:"/products/category-list",PRODUCTS:"/products",PRODUCT:"/products"};r.defaults.baseURL=l;async function u(){const{data:t}=await r(`${s.CATEGORIES}`);return t}async function p(t){const o={params:{skip:(t-1)*a,limit:a}},{data:c}=await r(s.PRODUCTS,o);return c}async function m(t){const{data:o}=await r(`${s.PRODUCTS}/${t}`);return o}const e={body:document.querySelector("body"),categoryList:document.querySelector(".categories"),productList:document.querySelector("ul.products"),modal:document.querySelector("div.modal"),modalProduct:document.querySelector(".modal-product"),modalCloseBtn:document.querySelector(".modal__close-btn"),backdrop:document.querySelector(".modal__backdrop")};function _(t){const o=t.map(c=>`<li class="categories__item">
   <button class="categories__btn" type="button">${c}</button>
 </li>`).join("");e.categoryList.innerHTML=o}function y(t){const o=t.products.map(c=>`<li class="products__item" data-id="${c.id}">
    <img class="products__image" src="${c.thumbnail}" alt="product image"/>
    <p class="products__title">${c.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: </span>${c.brand}</p>
    <p class="products__category">Category: ${c.category}</p>
    <p class="products__price">Price: $${c.price}</p>
 </li>`).join("");e.productList.insertAdjacentHTML("beforeend",o)}function g(t){const o=`<img class="modal-product__img" src="${t.images[0]}" alt="Product photo for ${t.title}" />
        <div class="modal-product__content">
          <p class="modal-product__title">${t.title}</p>
          <ul class="modal-product__tags"></ul>
          <p class="modal-product__description">${t.description}</p>
          <p class="modal-product__shipping-information">Shipping: ${t.shippingInformation}</p>
          <p class="modal-product__return-policy">Return Policy: ${t.returnPolicy}</p>
          <p class="modal-product__price">Price: $${t.price}</p>
          <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>`;e.modalProduct.innerHTML=o}function f(){e.body.style.overflow="hidden",e.modal.classList.add(d),document.addEventListener("keydown",i)}function n(){e.body.style.overflow="",e.modal.classList.remove(d),document.removeEventListener("keydown",i)}function i(t){t.key==="Escape"&&n()}async function b(){try{const t=await u();_(["All",...t]);const o=document.querySelector(".categories__btn");o&&o.classList.add("categories__btn--active")}catch(t){console.log(t)}}async function P(t){try{const o=await p(t);y(o)}catch(o){console.log(o)}}async function $(t){try{const o=await m(t);g(o),f()}catch(o){console.log(o)}}b();P(1);e.productList.addEventListener("click",t=>{if(t.target===t.currentTarget)return;const o=t.target.closest(".products__item").dataset.id;$(o)});e.modal.addEventListener("click",t=>{t.target===t.currentTarget&&n()});e.modalCloseBtn.addEventListener("click",t=>{n()});
//# sourceMappingURL=index.js.map
