import useFetch from '../../utils/useFetch';
import Card from '../../components/item-card/Card';
import styles from './Products.module.css';
import LoadingCard from '../../components/item-card/LoadingCard';
import errorIcon from '/error.svg';
import { useParams } from 'react-router-dom';
import {
  getProductsFromCategory,
  getProductUrl,
} from '../../utils/apiInterface';
import PropTypes from 'prop-types';

const Products = ({ limit }) => {
  const { category } = useParams();

  const { loading, data, error } = useFetch(
    category && decodeURIComponent(category) !== 'all'
      ? getProductsFromCategory(category)
      : limit
      ? getProductUrl({ limit: limit })
      : getProductUrl({}),
  );

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        {loading &&
          // Mock data for loading card
          Array.from({ length: 6 }, (_, index) => <LoadingCard key={index} />)}
        {data && data.map((item) => <Card key={item.id} data={item} />)}
        {error && (
          <div className={styles.error}>
            <img src={errorIcon} alt="error icon" width={100} />
            <h2>Failed to fetch data</h2>
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

Products.propTypes = {
  limit: PropTypes.number,
};
