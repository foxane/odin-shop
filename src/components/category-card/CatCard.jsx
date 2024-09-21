import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './CatCard.module.css';
import capitalize from '../../utils/capitalize';

const CatCard = ({ category = 'loading...', text = category }) => {
  return (
    <div className={styles.contentWrapper}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : '')}
        to={category}
      >
        {capitalize(text)}
      </NavLink>
    </div>
  );
};

export default CatCard;

CatCard.propTypes = {
  category: PropTypes.string,
  text: PropTypes.string,
};
