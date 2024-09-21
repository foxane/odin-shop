import PropTypes from 'prop-types';
import useFetch from '../../utils/useFetch';
import styles from './Categories.module.css';
import { Navigate, Outlet, useOutletContext } from 'react-router-dom';
import CatCard from '../../components/category-card/CatCard';
import { useState } from 'react';
import { getCategoriesUrl } from '../../utils/apiInterface';

const Categories = () => {
  const { loading, error, data } = useFetch(getCategoriesUrl());
  const { addToCart } = useOutletContext();

  useState(() => {
    console.log(data);
  }, [data]);

  if (error) return <Navigate to="/error" />;
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h1>Our collections</h1>
        <div className={styles.catWrapper}>
          {/* Render skeleton */}
          {loading &&
            Array.from({ length: 6 }, (_, index) => <CatCard key={index} />)}
          {/* Render categories */}
          {data && data.map((item) => <CatCard key={item} category={item} />)}
          <CatCard category="all" text="all products" />
        </div>
        <div className={styles.productWrapper}>
          <Outlet context={{ addToCart }} />
        </div>
      </div>
    </div>
  );
};

export default Categories;

Categories.propTypes = {
  children: PropTypes.element,
};
