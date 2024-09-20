import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.contentWrapper}>
        <div className={styles.newsletter}>
          <h4>Subscribe to our newsletter</h4>
          <form action="">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email here"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <nav className={styles.nav}>
          <h4>Site navigation</h4>
          <Link to="/">Home</Link>
          <Link to="categories">Categories</Link>
          <Link to="products">All products</Link>
          <Link to="about">About</Link>
        </nav>
        <div className={styles.support}>
          <h4>Support</h4>
          <Link to="#">Help</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms and Conditions</Link>
        </div>
        <div className={styles.social}>
          <h4>Our social media</h4>
          <a
            href="http://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
            Gogobebe
          </a>
          <a href="http://x.com/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter"></i>
            @gogobebe
          </a>
          <a href="http://ig.com/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
            @gogobebe
          </a>
        </div>
      </footer>
      <div className={styles.copyright}>
        <p>
          &copy; Gogobebe 2024
          <span> - </span>
          <a
            href="https://github.com/foxane"
            target="_blank"
            rel="noopener noreferrer"
          >
            foxane
          </a>
          <span> - </span>
          <a
            href="http://theodinproject.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            TheOdinProject.org
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
