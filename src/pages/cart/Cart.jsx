import { useOutletContext } from 'react-router-dom';
import styles from './Cart.module.css';
import CartCard from '../../components/cart-card/CartCard';

const Cart = () => {
  const { cart } = useOutletContext();
  return (
    <div className={styles.container}>
      <h1>Your cart</h1>
      <button className={styles.checkoutBtn}>Checkout</button>
      <div className={styles.cardWrapper}>
        {cart.map((item) => (
          <CartCard
            key={item.productId}
            productId={item.productId}
            count={item.count}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
