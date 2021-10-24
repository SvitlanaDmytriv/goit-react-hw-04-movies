import './App.css';

import { fetchPopularMovies } from './services/API';
import Navigation from './components/Navigation/Navigation.js';

function App() {
  console.log(fetchPopularMovies());
  return <Navigation />;
}

export default App;
