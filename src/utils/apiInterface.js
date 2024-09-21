const BASE_URL = 'https://fakestoreapi.com/products/';

const getProductUrl = ({ productId = '', limit = null }) => {
  console.log(
    'Calling api : ',
    encodeURI(BASE_URL + productId + (limit ? '?limit=' + limit : '')),
  );
  // if no param is set, it will get all products
  return encodeURI(BASE_URL + productId + (limit ? '?limit=' + limit : ''));
};

const getCategoriesUrl = () => {
  return encodeURI(BASE_URL + 'categories');
};

const getProductsFromCategory = (category) => {
  return encodeURI(BASE_URL + 'category/' + category);
};

export { getProductUrl, getCategoriesUrl, getProductsFromCategory };
