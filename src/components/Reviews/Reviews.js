import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../services/API';
import s from './Reviews.module.css';

export default function Reviews({ movieId, scroll }) {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(movie => {
      setReview(movie.results);
      scroll();
    });
  }, [movieId, scroll]);

  return (
    <div>
      {reviews.length > 0 ? (
        <div>
          <ul className={s.reviewsList}>
            {reviews.map(review => (
              <li key={review.id} className={s.reviewsListItem}>
                <p className={s.author}>{` ${review.author}`}</p>
                <p className={s.updated_at}>{`${review.updated_at}`}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <p>Not found any reviews</p>
        </div>
      )}
    </div>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string,
  scroll: PropTypes.func,
};
