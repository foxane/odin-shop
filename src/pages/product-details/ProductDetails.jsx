import { getProductUrl } from '../../utils/apiInterface';
import useFetch from '../../utils/useFetch';
import styles from './ProductDetails.module.css';
import { useParams, useOutletContext } from 'react-router-dom';
import Products from '../../components/products/Products';

const ProductDetails = () => {
  const { addToCart } = useOutletContext();
  const { productId } = useParams();
  const { data, error, loading } = useFetch(getProductUrl({ productId }));

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageWrapper}>
            <img src={data.image} alt={data.title} />
          </div>
          <div className={styles.detailsWrapper}>
            <h2>{data.title}</h2>
            <p className={styles.rating}>
              <i className="fa-solid fa-star"></i>
              <b className={styles.rate}>{data.rating.rate}</b>(
              {data.rating.count} rating)
            </p>
            <p className={styles.price}>
              <b>${data.price} USD</b>
            </p>
            <div className={styles.descWrapper}>
              <h3>Descriptions</h3>
              <p className={styles.description}>{data.description}</p>
            </div>
            <button
              onClick={() => addToCart(productId, 1)}
              className={styles.addToCartBtn}
            >
              <i className="fa-solid fa-cart-plus"></i>Add to cart
            </button>
          </div>
        </div>
        <div className={styles.recommendation}>
          <h2>Other people also likes</h2>
          <Products limit={3} />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
