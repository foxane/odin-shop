import { getProductUrl } from '../../utils/apiInterface';
import styles from './CartCard.module.css';
import useFetch from '../../utils/useFetch';
import { useOutletContext } from 'react-router-dom';
import PropTypes from 'prop-types';
import Qty from '../qty/Qty';

const CartCard = ({ productId, count }) => {
  const { removeFromCart } = useOutletContext();
  const { loading, data } = useFetch(getProductUrl({ productId: productId }));

  if (loading) return <h1>LOading</h1>;
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={data.image} alt={data.title} width={100} />
      </div>
      <div className={styles.detailWrapper}>
        <h4>{data.title}</h4>
        <Qty productId={productId} count={count} />
        <p>Subtotal : ${count * data.price} USD</p>
        <button
          className={styles.deleteBtn}
          onClick={() => removeFromCart(productId)}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartCard;

CartCard.propTypes = {
  productId: PropTypes.number,
  count: PropTypes.number,
};
