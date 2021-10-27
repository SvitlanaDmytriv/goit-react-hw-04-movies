import { lazy, Suspense } from 'react';
import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  useRouteMatch,
  Switch,
  Route,
} from 'react-router-dom';
import { fetchMovieDetails } from '../services/API';
import defaultImg from '../default.jpg';

const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [moviePage, setMoviePage] = useState([]);
  const { url, path } = useRouteMatch();

  useEffect(() => {
    fetchMovieDetails(movieId).then(movie => {
      setMoviePage(movie);
    });
  }, [movieId]);

  return (
    <>
      <div>
        {moviePage && (
          <>
            <img
              src={
                moviePage.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500/${moviePage.poster_path}`
                  : defaultImg
              }
              alt={moviePage.title}
              width="300"
              height="250"
            />
            <div>
              <ul>
                <li>
                  <h2>{moviePage.title}</h2>
                </li>
                <li>
                  <p>Release date:</p>
                  <span>{` ${moviePage.release_date}`}</span>
                </li>
                <li>
                  <span>{`Popularity: ${moviePage.popularity}%`}</span>
                </li>
                <li>
                  <span>{`Overview: ${moviePage.overview}`}</span>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>

      <nav>
        <NavLink to={`${url}/cast`}>Cast</NavLink>
        <NavLink to={`${url}/reviews`}>Reviews</NavLink>
      </nav>

      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={`${path}/cast`}>
            <Cast movieId={movieId} />
          </Route>

          <Route path={`${path}/reviews`}>
            <Reviews movieId={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
