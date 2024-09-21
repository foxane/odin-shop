import loadingIcon from '/loading.svg';
import styles from './Card.module.css';

const LoadingCard = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.imageWrapperLoading} ${styles.imageWrapper}`}>
        <img src={loadingIcon} alt="loading" />
      </div>
      <p className={styles.title}>Loading..</p>
      <p className={styles.price}>$ 00.00</p>
      <div className={styles.rating}>
        <p>
          <i className="fa-solid fa-star"></i>0 &bull; 0+ sold
        </p>
      </div>
      <button className={styles.addToCartBtn}>
        <i className="fa-solid fa-cart-plus"></i>Add to cart
      </button>
    </div>
  );
};

export default LoadingCard;
