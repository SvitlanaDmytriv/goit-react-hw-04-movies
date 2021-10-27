import { useState, useEffect } from 'react';
import MoviesList from '../components/MoviesList/MoviesList';

import { fetchPopularMovies } from '../services/API';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then(res => setMovies(res.results));
  }, []);

  return (
    <div>
      <h2>Popular movies</h2>
      <MoviesList movies={movies} />
    </div>
  );
}
