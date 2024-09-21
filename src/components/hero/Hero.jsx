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
          <button className={styles.outline}>Start Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
