import { useEffect, useState } from 'react';

import SearchInput from '../components/SearchInput/SearchInput';
import MoviesList from '../components/MoviesList/MoviesList';
import { fetchSearchMovies } from '../services/API';
import LoadMore from '../components/LoadMoreBtn/LoadMoreBtn';

export default function MoviesPage() {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (value.trim() === '') {
      return;
    }

    fetchSearchMovies(value, page).then(res => {
      if (res.results.length === 0) {
        setError(`Error! ${value} movie was not found. Try again`);
        return;
      }
      setMovies(prevMovies => [...prevMovies, ...res.results]);
      setError('');
    });
  }, [page, value]);

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

  const changeValue = searchValue => {
    setMovies([]);
    setValue(searchValue);
    setPage(1);
  };

  return (
    <>
      <SearchInput changeValue={changeValue} />
      {error ? error : <MoviesList movies={movies} />}
      {movies.length >= 20 && <LoadMore handleCick={handleCick} />}
    </>
  );
}
