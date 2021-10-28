import { useState, useEffect } from 'react';
import { fetchMovieCredits } from '../../services/API';
import defaultImg from '../../default.jpg';
import s from './Cast.module.css';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(res => setCast(res.cast));
  }, [movieId]);

  return (
    <div>
      {cast.length > 0 ? (
        <div>
          <ul className={s.listActors}>
            {cast.map(actor => (
              <li key={actor.id} className={s.actorCard}>
                <div>
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                        : defaultImg
                    }
                    alt={`${actor.name}`}
                    className={s.castImg}
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
          <p>Not found</p>
        </div>
      )}
    </div>
  );
}
