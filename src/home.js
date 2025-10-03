import { getCategories, getProducts } from './js/handlers';

//Логіка сторінки Home
getCategories();
getProducts(1);

refs.categoryList.addEventListener('click' ,  (event) => {
    if(!event.target.classList("categories__btn")) {return}

    
  })
