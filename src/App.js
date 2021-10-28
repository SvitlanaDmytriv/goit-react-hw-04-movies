import './App.css';
import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation.js';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() =>
  import('./views/HomePage' /*webpackChunkName:'HomePage'*/),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /*webpackChunkName:'MoviesPage'*/),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /*webpackChunkName:'MovieDetailsPage'*/),
);
const NotFoundPage = lazy(() =>
  import('./views/NotFound' /*webpackChunkName:'NotFoundPage'*/),
);

function App() {
  return (
    <>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/movies">
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
