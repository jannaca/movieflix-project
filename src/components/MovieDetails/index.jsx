import useListsMovies from "../../hooks/useListsMovies";
import useMoviesResults from "../../state/movies-results";
import ButtonToAddToWatchList from "../ButtonToAddToWatchList";
import ButtonAddToFavorites from "../ButtonAddToFavorites";
import TrailerPlayer from "../TrailerPlayer";
import { useState } from "react";
import useMoviesDetailResults from "../../state/movies-detail-results";
import styles from "./MovieDetails.module.css";
import { Row, Col, Container } from "react-bootstrap";


const MoviesDetails = ({ movieDetail }) => {
  const { IMAGE_PATH } = useMoviesResults();
  const { addToWatchList, addToFavoriteList } = useListsMovies();
  const { title, poster_path, overview, genres, release_date, runtime } =
    movieDetail;
  const [playing, setPlaying] = useState(false);
  const { trailer } = useMoviesDetailResults();
  return (
    <Container>
      <Row xs={1} md={2} lg={2} className="g-0">
        <Col className={styles.imageCotainer}>
          <img
            src={`${IMAGE_PATH + poster_path}`}
            alt={movieDetail.title}

          />
        </Col>
        <Col>
        <div className={styles.infoMovieContainer}>
          <h1>{title}</h1>
          <p>Descripcion</p>
          <p>{overview}</p>
          <p>Generos</p>
            {genres.map((genre) => (
              <span key={`genre-${genre.id}`}>{genre.name}, </span>
            ))}
    
          <p>Fecha de Lanzamiento</p>
          <p>{release_date}</p>
          <p>Duracion</p>
          <p>{`${runtime} min`} </p>
          <div>
            <ButtonToAddToWatchList
              OnAddToWatchList={() => addToWatchList(movieDetail)}
            />
            <ButtonAddToFavorites
              OnAddToFavorites={() => addToFavoriteList(movieDetail)}
            />
            {playing ? (
              <TrailerPlayer
                trailer={trailer}
                setPlaying={setPlaying}
              ></TrailerPlayer>
            ) : (
              <div className="container">
                <div className="">
                  {trailer ? (
                    <button
                      className="boton"
                      onClick={() => setPlaying(true)}
                      type="button"
                    >
                      Play Trailer
                    </button>
                  ) : (
                    "Lo siento, trailer no disponible"
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviesDetails;
