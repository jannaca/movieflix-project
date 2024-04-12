import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/watched-movies">Peliculas Vistas</Link>
        </li>
        <li>
          <Link to="/to-watch-movies">Peliculas Por Ver</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
