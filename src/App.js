import './App.css';
import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation.js';

const HomePage = lazy(() => import('./views/HomePage'));
const MoviesPage = lazy(() => import('./views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./views/NotFound'));

function App() {
  return (
    <>
      <Navigation />

      <Suspense fallback={<p>Loading...</p>}>
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
