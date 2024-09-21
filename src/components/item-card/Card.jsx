import styles from './Card.module.css';
import { useOutletContext, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ data }) => {
  const { addToCart } = useOutletContext();

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Link to={'/product/' + data.id}>
          <img src={data.image} alt={data.title} width={100} loading="lazy" />
        </Link>
      </div>
      <p className={styles.title}>
        <Link to={'/product/' + data.id}>{data.title}</Link>
      </p>
      <p className={styles.price}>
        <b>$ {data.price}</b>
      </p>
      <p className={styles.rating}>
        <i className="fa-solid fa-star"></i>
        {data.rating.rate} &bull; {data.rating.count}+ sold
      </p>
      <button
        onClick={() => addToCart(data.id)}
        className={styles.addToCartBtn}
      >
        <i className="fa-solid fa-cart-plus"></i>Add to cart
      </button>
    </div>
  );
};

export default Card;

Card.propTypes = {
  data: PropTypes.object,
};
