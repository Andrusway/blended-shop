import"./assets/styles-JE8YjOlG.js";import{a as o}from"./assets/vendor-N5iQpiFS.js";const c="https://dummyjson.com",a={CATEGORIES:"/products/category-list"};o.defaults.baseURL=c;async function r(){const{data:t}=await o(`${a.CATEGORIES}`);return t}const n={categoryList:document.querySelector(".categories")};function i(t){const e=t.map(s=>`<li class="categories__item">
   <button class="categories__btn" type="button">${s}</button>
 </li>`).join("");n.categoryList.innerHTML=e}async function u(){try{const t=await r();i(["All",...t]);const e=document.querySelector(".categories__btn");e&&e.classList.add("categories__btn--active")}catch(t){console.log(t)}}u();
//# sourceMappingURL=index.js.map
