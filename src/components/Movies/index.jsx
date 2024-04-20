import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useListsMovies from "../../hooks/useListsMovies";
import MovieCard from "./MovieCard";
import useMoviesResults from "../../state/movies-results";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Row, Col } from 'react-bootstrap';


const Movies = () => {
  // --- VARIABLES----
  const [searchKey, setSearchKey] = useState("");
  //Obtener Peliculas y ruta de las imagenes de la API
  const { movies, IMAGE_PATH, fetchMovies } = useMoviesResults();

  const { addToWatchList, addToWatchedList } = useListsMovies();

  useEffect(() => {
    fetchMovies(searchKey);
  }, [searchKey]);

  const navigate = useNavigate(); // permite dirigirme a otras rutas

  // --- FUNCIONES----
  //Evito que el Formulario se envie Automaticamente
  const searchMovies = (e) => {
    e.preventDefault();
    console.log(movies);
  };

  //Limpio el Input de Busqueda
  const deleteSearch = () => {
    setSearchKey("");
  };

  //Dirigo al usuario a la pagina de detalles
  const handleDetailClick = (id) => {
    navigate(`/detail/${id}`);
  };

  // --- FUNCIONES----

  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-md-4">
          <h3 className="fst-italic">Descubre nuevas películas</h3>
          <Form onSubmit={searchMovies} className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              value={searchKey}
              aria-label="Search"
              onChange={(e) => setSearchKey(e.target.value)}
            />
          </Form>
        </div>
      </div>
      <div>
      {searchKey === "" && <h2>Peliculas Populares</h2>}
      <Row xs={1}  md={3} lg={4} className="g-4">
        {movies.map((movie) => (
  
            <Col key={`movie-item-${movie.id}` } className="d-flex" >
            <MovieCard
              title={movie.title}
              image={`${IMAGE_PATH}${movie.poster_path}`}
              OnDetailClick={() => handleDetailClick(movie.id)}
              OnAddToWatchList={() => addToWatchList(movie)}
              OnAddToWatchedList={() => addToWatchedList(movie)}
            />
          </Col>

        ))}
      </Row>
    </div>
    </Container>
  );
};

export default Movies;
