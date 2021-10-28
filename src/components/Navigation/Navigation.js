import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      <nav>
        <NavLink exact to="/" activeClassName={s.activeLink} className={s.link}>
          Home
        </NavLink>
        <NavLink to="/movies" activeClassName={s.activeLink} className={s.link}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
