import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul>
      <NavLink>
        <li>
          <button type="button">Home</button>
        </li>{' '}
      </NavLink>
      <NavLink>
        <li>
          <button type="button">Movies</button>
        </li>
      </NavLink>
    </ul>
  );
};

export default Navigation;
