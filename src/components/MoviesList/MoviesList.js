import { Link } from 'react-router-dom';
import defaultImg from '../../default.jpg';
import s from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  return (
    <div className={s.movieListContainer}>
      <ul className={s.movieList}>
        {movies &&
          movies.map(movie => (
            <li key={movie.id} className={s.movieСard}>
              <Link to={`/movies/${movie.id}`} className={s.movieLink}>
                <div className={s.movieBody}>
                  <img
                    className={s.movieImg}
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : defaultImg
                    }
                    alt={movie.title}
                  />
                </div>
                <h3>{movie.title}</h3>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
