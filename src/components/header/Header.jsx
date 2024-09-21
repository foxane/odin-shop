import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import useScroll from '../../utils/useScroll';
import styles from './Header.module.css';
import logo from '/logo.svg';

// cart count is not implemented yet, change state to 0!
const Header = ({ itemCount = 10 }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isScrolled = useScroll();

  return (
    <header
      className={`${styles.container} ${isScrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.contentWrapper}>
        <button
          aria-label="navigation button"
          className={`${styles.navBtn} ${styles.openMenuBtn}`}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <Link to={'/'} className={styles.title}>
          <h1 className={styles.titleBig}>Gogobebe</h1>
          <img src={logo} alt="Gogobebe logo" className={styles.titleSmall} />
        </Link>
        <div className={styles.inlineNav}>
          <nav>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'cat'}>Categories</NavLink>
            <NavLink to={'products'}>All Products</NavLink>
            <NavLink to={'about'}>About</NavLink>
          </nav>
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.navBtn}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <div className={styles.cartContainer}>
            <Link to="cart" className={styles.navBtn}>
              <i className="fa-solid fa-cart-shopping"></i>
              <span aria-label="item in cart" className={styles.itemCount}>
                {itemCount}
              </span>
            </Link>
          </div>
        </div>

        {/* Navigation panel */}
        {isNavOpen && (
          <>
            <div
              aria-label="navigation content"
              className={`${styles.floatNav} ${
                isNavOpen ? styles.open : styles.close
              }`}
            >
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className={`${styles.navBtn} ${styles.closeNavBtn}`}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'cat'}>Categories</Link>
                <Link to={'products'}>All Products</Link>
                <Link to={'about'}>About</Link>
              </nav>
              <a
                href="http://github.com/foxane/odin-shop"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.source}
              >
                <i className="fa-brands fa-github"></i> Source
              </a>
              <div
                className={styles.overlay}
                onClick={() => setIsNavOpen(!isNavOpen)}
              ></div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  itemCount: PropTypes.number,
  errorPage: PropTypes.element,
};
