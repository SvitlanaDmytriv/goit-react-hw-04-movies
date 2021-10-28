import { useState, useEffect } from 'react';
import MoviesList from '../components/MoviesList/MoviesList';
import { fetchPopularMovies } from '../services/API';
import s from './Views.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then(res => setMovies(res.results));
  }, []);

  return (
    <div>
      <h2 className={s.title}>Popular movies</h2>
      <MoviesList movies={movies} />
    </div>
  );
}
