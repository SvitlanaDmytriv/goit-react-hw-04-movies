import { Link } from 'react-router-dom';
import defaultImg from '../../default.jpg';

export default function MoviesList({ movies }) {
  return (
    <ul>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <div>
                <img
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
  );
}
