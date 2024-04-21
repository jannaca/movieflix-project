import { Container } from "react-bootstrap";
import ToWatchMovies from "../../components/ToWatchMovies";
import useListsMovies from "../../hooks/useListsMovies";
import { Link } from "react-router-dom";
import styles from "./ToWacthMoviesPage.module.css";

const ToWatchMoviesPage = () => {
  const { watchList, handleDeleteWatchMovie, addToFavoriteList } =
    useListsMovies();

  const handleFavoriteMovie = (movie) => {
    handleDeleteWatchMovie(movie.id); // Eliminar la película de la lista de películas por ver
    addToFavoriteList(movie); // Agregar la película a la lista de películas vistas
  };

  return (
    <Container>
      <div className="text-center">
        <h2 className={styles.honkLogo}>Watch List</h2>
      </div>
      {watchList.length !== 0 ? (
        <ToWatchMovies
          watchList={watchList}
          onDeleteWatchMovie={handleDeleteWatchMovie}
          OnFavoriteMovie={handleFavoriteMovie}
        />
      ) : (
        <div>
          <p className="mb-4">
            Aún no has agregado ningún elemento a tu WatchList
          </p>
          <Link className={styles.startNow} to="/">
            ¡Comienza ahora mismo!
          </Link>
        </div>
      )}
    </Container>
  );
};

export default ToWatchMoviesPage;
