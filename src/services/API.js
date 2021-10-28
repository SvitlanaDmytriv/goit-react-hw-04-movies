import axios from 'axios';

const KEY = '41400f9a5dc961c095c03bb4912582a5';
const BASE_URL = 'https://api.themoviedb.org/3/';

export function fetchPopularMovies(page = 1) {
  return axios
    .get(`${BASE_URL}trending/movie/week?api_key=${KEY}&page=${page}`)
    .then(res => res.data)
    .catch(err => err);
}

export function fetchSearchMovies(value, page = 1) {
  return axios
    .get(`${BASE_URL}search/movie?api_key=${KEY}&query=${value}&page=${page}`)
    .then(res => res.data)
    .catch(err => err);
}

export function fetchMovieDetails(movieId) {
  return axios
    .get(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`)
    .then(res => res.data)
    .catch(err => err);
}

export function fetchMovieCredits(movieId) {
  return axios
    .get(`${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`)
    .then(res => res.data)
    .catch(err => err);
}

export function fetchMovieReviews(movieId) {
  return axios
    .get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&page=1`)
    .then(res => res.data)
    .catch(err => err);
}
