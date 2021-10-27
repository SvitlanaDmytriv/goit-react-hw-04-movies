import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink exact to="/" className={s.link} activeClassName={s.active_link}>
        Home
      </NavLink>
      <NavLink to="/movies" className={s.link} activeClassName={s.active_link}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
