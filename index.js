import"./assets/styles-JE8YjOlG.js";import{a as o}from"./assets/vendor-N5iQpiFS.js";const n="https://dummyjson.com",e=12,a={CATEGORIES:"/products/category-list",PRODUCTS:"/products"};o.defaults.baseURL=n;async function i(){const{data:t}=await o(`${a.CATEGORIES}`);return t}async function u(t){const s={params:{skip:(t-1)*e,limit:e}},{data:c}=await o(a.PRODUCTS,s);return c}const r={categoryList:document.querySelector(".categories"),productList:document.querySelector("ul.products")};function d(t){const s=t.map(c=>`<li class="categories__item">
   <button class="categories__btn" type="button">${c}</button>
 </li>`).join("");r.categoryList.innerHTML=s}function p(t){const s=t.products.map(c=>`<li class="products__item" data-id="${c.id}">
    <img class="products__image" src="${c.thumbnail}" alt="product image"/>
    <p class="products__title">${c.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: </span>${c.brand}</p>
    <p class="products__category">Category: ${c.category}</p>
    <p class="products__price">Price: $${c.price}</p>
 </li>`).join("");r.productList.insertAdjacentHTML("beforeend",s)}async function l(){try{const t=await i();d(["All",...t]);const s=document.querySelector(".categories__btn");s&&s.classList.add("categories__btn--active")}catch(t){console.log(t)}}async function _(t){try{const s=await u(t);p(s)}catch(s){console.log(s)}}l();_(1);
//# sourceMappingURL=index.js.map
