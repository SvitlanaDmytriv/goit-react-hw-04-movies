import { useState, useEffect } from 'react';
import { fetchMovieCredits } from '../../services/API';
import defaultImg from '../../default.jpg';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCredits(movieId).then(res => setCast(res.cast));
  }, [movieId]);

  return (
    <div>
      {cast ? (
        <div>
          <h3>Cast:</h3>
          <ul>
            {cast.map(actor => (
              <li key={actor.id}>
                <div>
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                        : defaultImg
                    }
                    alt={`${actor.name}`}
                  />
                  <h3>{actor.original_name}</h3>
                  <p>Character: {actor.character}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h3>Cast:</h3>
          <p>Not found</p>
        </div>
      )}
    </div>
  );
}
