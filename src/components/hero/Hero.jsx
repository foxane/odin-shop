import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.content}>
        <h2>
          Shiny overpriced <span className={styles.highlight}>garbage</span>
        </h2>
        <p>All the overpriced garbage you need is here</p>
        <div className={styles.buttonWrapper}>
          <button className={styles.outline}>
            <Link to="products">Start Shopping</Link>
          </button>
        </div>
        <p className={styles.credit}>
          Photo by
          <a
            href="https://www.pexels.com/photo/woman-standing-with-hands-on-hips-in-black-and-white-20235863/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alessandra Shalbe
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
