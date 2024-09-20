import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './Header.module.css';
import PropTypes from 'prop-types';

// cart count is not implemented yet, change state to 0!
const Header = ({ itemCount = 10 }) => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className={styles.container}>
      <div className={styles.contentWrapper}>
        <button
          aria-label="navigation button"
          className={`${styles.navBtn} ${styles.navToggle}`}
          onClick={() => setOpenNav(!openNav)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <Link to={'/'} className={styles.title}>
          <h1>Gogobebe</h1>
        </Link>
        <div className={styles.inlineNav}>
          <nav>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'categories'}>Categories</NavLink>
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
        {openNav && (
          <div
            aria-label="navigation content"
            className={`${styles.floatNav} ${
              openNav ? styles.open : styles.close
            }`}
          >
            <nav>
              <Link to={'/'}>Home</Link>
              <Link to={'categories'}>Categories</Link>
              <Link to={'products'}>All Products</Link>
              <Link to={'about'}>About</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  itemCount: PropTypes.number,
};
