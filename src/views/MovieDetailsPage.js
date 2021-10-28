import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  NavLink,
  useRouteMatch,
  Switch,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { fetchMovieDetails } from '../services/API';
import defaultImg from '../default.jpg';

import s from './Views.module.css';

import Loader from '../components/Loader/Loader';
import ButtonGoBack from '../components/ButtonGoBack/ButtonGoBack';

const Cast = lazy(() =>
  import('../components/Cast/Cast' /*webpackChunkName:'Cast'*/),
);
const Reviews = lazy(() =>
  import('../components/Reviews/Reviews' /*webpackChunkName:'Reviews'*/),
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [moviePage, setMoviePage] = useState([]);
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(movieId).then(movie => {
      setMoviePage(movie);
    });
  }, [movieId]);

  const scroll = () => {
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.clientHeight - 145,
        behavior: 'smooth',
      });
    }, 300);
  };

  const goBack = () => {
    history.push(location?.state?.from?.location);
  };

  return (
    <>
      <div className={s.movieDetailsPage}>
        <ButtonGoBack onClick={goBack} />
        {moviePage && (
          <>
            <img
              className={s.imgDetails}
              src={
                moviePage.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500/${moviePage.poster_path}`
                  : defaultImg
              }
              alt={moviePage.title}
              width="300"
              height="250"
            />
            <div className={s.movieDescription}>
              <ul className={s.list}>
                <li>
                  <h2 className={s.titleMovie}>{moviePage.title}</h2>
                </li>
                <li className={s.listDescription}>
                  <p className={s.text}>Release date:</p>
                  <span
                    className={s.release}
                  >{` ${moviePage.release_date}`}</span>
                </li>
                <li className={s.listDescription}>
                  <span>{`Popularity: ${moviePage.popularity}%`}</span>
                </li>
                <li className={s.listDescription}>
                  <span
                    className={s.overview}
                  >{`Overview: ${moviePage.overview}`}</span>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>

      <nav className={s.navContainer}>
        <NavLink
          to={{
            pathname: `${url}/cast`,
            state: {
              ...location.state,
            },
          }}
          className={s.description}
          activeClassName={s.activeLink}
        >
          Cast
        </NavLink>
        <NavLink
          to={{
            pathname: `${url}/reviews`,
            state: {
              ...location.state,
            },
          }}
          className={s.description}
          activeClassName={s.activeLink}
        >
          Reviews
        </NavLink>
      </nav>

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={`${path}/cast`}>
            <Cast movieId={movieId} scroll={scroll} />
          </Route>

          <Route path={`${path}/reviews`}>
            <Reviews movieId={movieId} scroll={scroll} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
