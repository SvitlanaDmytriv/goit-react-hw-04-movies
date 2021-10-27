import { useEffect, useState } from 'react';

import SearchInput from '../components/SearchInput/SearchInput';
import MoviesList from '../components/MoviesList/MoviesList';
import { fetchSearchMovies } from '../services/API';

export default function MoviesPage() {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (value.trim() === '') {
      return;
    }
    fetchSearchMovies(value).then(res => {
      if (res.results.length === 0) {
        setError(`Error! ${value} movie was not found. Try again`);
        return;
      }
      setMovies(res.results);
      setError('');
    });
  }, [value]);

  const changeValue = searchValue => {
    return setValue(searchValue);
  };

  return (
    <>
      <SearchInput changeValue={changeValue} />
      {error ? error : <MoviesList movies={movies} />}
    </>
  );
}
