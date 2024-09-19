import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className={styles.container}>
      <button
        className={`${styles.navBtn} ${styles.navToggle}`}
        onClick={() => setOpenNav(!openNav)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <Link to={'/'} className={styles.title}>
        <h1>Gogobebe</h1>
      </Link>
      <div className={styles.topNav}>
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
          <button className={styles.navBtn}>
            <Link to="cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className={styles.cartCount}>10</span>
            </Link>
          </button>
        </div>
      </div>

      {/* Navigation panel */}
      <div
        className={`${styles.floatNav} ${openNav ? styles.open : styles.close}`}
      >
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'categories'}>Categories</Link>
          <Link to={'products'}>All Products</Link>
          <Link to={'about'}>About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
