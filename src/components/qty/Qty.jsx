import PropTypes from 'prop-types';
import styles from './Qty.module.css';
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';

const Qty = ({ productId, count }) => {
  const { addToCart } = useOutletContext();
  const [itemCount, setItemCount] = useState(count);
  const inputChange = (e) => {
    setItemCount(Number(e.target.value));
    addToCart(productId, Number(e.target.value));
  };
  const increment = () => {
    if (itemCount === 10) return;
    setItemCount(itemCount + 1);
    addToCart(productId, itemCount + 1);
  };
  const decrement = () => {
    if (itemCount === 1) return;
    setItemCount(itemCount - 1);
    addToCart(productId, itemCount - 1);
  };

  return (
    <div className={styles.container}>
      <button onClick={decrement}>
        <i className="fa-solid fa-minus"></i>
      </button>
      <input type="number" onChange={inputChange} value={itemCount} readOnly />
      <button onClick={increment}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default Qty;

Qty.propTypes = {
  count: PropTypes.number,
  productId: PropTypes.number,
};
