import { useState, useEffect } from 'react';
import MoviesList from '../components/MoviesList/MoviesList';
import { fetchPopularMovies } from '../services/API';
import LoadMore from '../components/LoadMoreBtn/LoadMoreBtn';
import s from './Views.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPopularMovies(page).then(res =>
      setMovies(prevMovies => [...prevMovies, ...res.results]),
    );
  }, [page]);

  const handleCick = () => {
    setPage(prevPage => prevPage + 1);
    scroll();
  };

  const scroll = () => {
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.clientHeight - 100,
        behavior: 'smooth',
      });
    }, 300);
  };

  return (
    <div>
      <h2 className={s.title}>Popular movies</h2>
      <MoviesList movies={movies} />
      {movies.length >= 20 && <LoadMore handleCick={handleCick} />}
    </div>
  );
}
