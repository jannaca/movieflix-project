import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useListsMovies from "../../hooks/useListsMovies";
import MovieCard from "./MovieCard";
import useMoviesResults from "../../state/movies-results";
import styles from "./Movie.module.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

const Movies = () => {
  // --- VARIABLES----
  const [searchKey, setSearchKey] = useState("");
  //Obtener Peliculas y ruta de las imagenes de la API
  const { movies, IMAGE_PATH, fetchMovies } = useMoviesResults();

  const { addToWatchList, addToFavoriteList } = useListsMovies();

  useEffect(() => {
    fetchMovies(searchKey);
  }, [searchKey]);

  const navigate = useNavigate(); // permite dirigirme a otras rutas

  // --- FUNCIONES----
  //Evito que el Formulario se envie Automaticamente
  const searchMovies = (e) => {
    e.preventDefault();
  };

  //Dirigo al usuario a la pagina de detalles
  const handleDetailClick = (id) => {
    navigate(`/detail/${id}`);
  };

  // --- FUNCIONES----

  return (
    <Container className="mb-5">
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-md-4 text-center">
          <h2 className={styles.honkLogo}>MovieFlix</h2>
          <Form onSubmit={searchMovies} className="d-flex my-5">
            <Form.Control
              type="search"
              placeholder="¡Empieza a explorar!"
              className="me-2"
              value={searchKey}
              aria-label="Search"
              onChange={(e) => setSearchKey(e.target.value)}
            />
          </Form>
        </div>
      </div>
      <div>
        {searchKey === "" && (
          <div className="d-flex justify-content-center ">
            <div className={styles.containerDivider}>
              <div className={styles.containerDividerElementOne}>
                <h3>¿No estás seguro de qué buscar?</h3>
                <h5 className="fst-italic">
                  Echa un vistazo a nuestra sección de películas recientes.
                </h5>
              </div>
              <div className={styles.containerDividerElementTwo}>🤔</div>
            </div>
          </div>
        )}

        <Row xs={1} md={3} lg={4} className="g-4">
          {movies.map((movie) => (
            <Col key={`movie-item-${movie.id}`} className="d-flex">
              <MovieCard
                title={movie.title}
                image={`${IMAGE_PATH}${movie.poster_path}`}
                OnDetailClick={() => handleDetailClick(movie.id)}
                OnAddToWatchList={() => addToWatchList(movie)}
                OnAddToFavorites={() => addToFavoriteList(movie)}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Movies;
