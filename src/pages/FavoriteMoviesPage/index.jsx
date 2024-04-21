import { Container } from "react-bootstrap";
import FavoriteMovies from "../../components/FavoriteMovies";
import useListsMovies from "../../hooks/useListsMovies";
import { Link } from "react-router-dom";
import styles from "../ToWacthMoviesPage/ToWacthMoviesPage.module.css"

const FavoriteMoviesPage = () => {
  const { favoriteList, handleDeleteFavoriteMovie } = useListsMovies();

  return (
    <Container>
      <div className="text-center">
        <h2 className={styles.honkLogo}>Favoritos</h2>
      </div>
      {favoriteList.length !== 0 ? (
        <FavoriteMovies
        favoriteList={favoriteList}
          onDeleteFavoriteMovie={handleDeleteFavoriteMovie}
        />
      ) : (
        <div>
        <p className="mb-4">
          Aún no has agregado ningún elemento a Favoritos
        </p>
        <Link className={styles.startNow} to="/">
          ¡Comienza ahora mismo!
        </Link>
      </div>
      )}
    </Container>
  );
};

export default FavoriteMoviesPage;
