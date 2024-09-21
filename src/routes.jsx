import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import ErrorPage from './pages/errorPage/ErrorPage';
import ProductDetails from './pages/product-details/ProductDetails';
import Categories from './pages/categories/Categories';
import Products from './components/products/Products';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <App errorPage={<ErrorPage />} />, // To show header and footer
    children: [
      { index: true, element: <Home /> },
      { path: 'error', element: <ErrorPage /> },
      { path: 'cart', element: <Cart /> },
      { path: 'product/:productId', element: <ProductDetails /> },
      { path: 'products', element: <Navigate to="/cat" /> },
      {
        path: 'cat',
        element: <Categories />,
        children: [
          { index: true, element: <Products /> },
          {
            path: ':category',
            element: <Products />,
          },
        ],
      },
    ],
  },
]);

export default routes;
