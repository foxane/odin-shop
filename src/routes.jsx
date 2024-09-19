import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/home/Home';
import ErrorPage from './pages/errorPage/ErrorPage';
import Cart from './pages/cart/Cart';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
]);

export default routes;
