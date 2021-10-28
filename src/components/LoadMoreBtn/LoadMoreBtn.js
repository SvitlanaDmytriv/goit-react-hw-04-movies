import PropTypes from 'prop-types';
import s from './LoadMoreBtn.module.css';

export default function LoadMore({ handleCick }) {
  return (
    <div>
      <button type="button" className={s.Button} onClick={handleCick}>
        Load more
      </button>
    </div>
  );
}

LoadMore.propTypes = {
  handleCick: PropTypes.func.isRequired,
};
