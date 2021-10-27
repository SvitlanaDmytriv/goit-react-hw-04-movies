import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../services/API';

export default function Reviews({ movieId }) {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(movie => {
      setReview(movie.results);
    });
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <div>
          <h3>Reviews:</h3>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <p>{`Author: ${review.author}`}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h3>Reviews:</h3>
          <p>Not found any reviews</p>
        </div>
      )}
    </div>
  );
}
