import PropTypes from 'prop-types';
import s from './LoadMoreBtn.module.css';

export default function LoadMore({ handleCick }) {
  return (
    <div className={s.loadingContainer}>
      <button type="button" className={s.Loading} onClick={handleCick}>
        Load more
      </button>
    </div>
  );
}

LoadMore.propTypes = {
  handleCick: PropTypes.func.isRequired,
};
