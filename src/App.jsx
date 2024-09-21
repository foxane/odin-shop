import PropTypes from 'prop-types';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App({ errorPage }) {
  const [cart, setCart] = useState([]);
  const addToCart = (newId, newCount = 1) => {
    if (cart.some((product) => product.productId === newId)) {
      setCart((prev) =>
        prev.map((product) =>
          product.productId === newId
            ? { ...product, count: newCount }
            : product,
        ),
      );
    } else {
      setCart((prev) => [...prev, { productId: newId, count: newCount }]);
    }
  };
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((product) => product.productId !== id));
  };

  return (
    <>
      <Header itemCount={cart.reduce((acc, curr) => curr.count + acc, 0)} />
      <main>
        {errorPage ? (
          errorPage
        ) : (
          <Outlet context={{ addToCart, removeFromCart, cart }} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;

App.propTypes = {
  errorPage: PropTypes.element,
};
