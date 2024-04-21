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
      <Row xs={1} md={2} lg={2} className="g-0 mt-5">
        <Col className={styles.imageCotainer}>
          <img
            src={`${IMAGE_PATH + poster_path}`}
            alt={movieDetail.title}
            className="img-fluid"
          />
        </Col>
        <Col>
          <div className={styles.infoMovieContainer}>
            <h1>{title}</h1>
            <p className="fw-bold">Descripción</p>
            <p>{overview}</p>
            <p className="fw-bold">Géneros:</p>
            {genres.map((genre) => (
              <span key={`genre-${genre.id}`}>{genre.name}, </span>
            ))}

            <p className="mt-3">
              <span className="fw-bold">Fecha de Lanzamiento: </span>
              {release_date}
            </p>

            <p>
              <span className="fw-bold">Duranción: </span>
              {`${runtime} min`}{" "}
            </p>
            <div>
              <ButtonToAddToWatchList
                OnAddToWatchList={() => addToWatchList(movieDetail)}
              />
              <ButtonAddToFavorites
                OnAddToFavorites={() => addToFavoriteList(movieDetail)}
              />
              {playing ? (
                <div className={styles.modal}>
                  <div className={styles.modalContent}>
                    <TrailerPlayer
                      trailer={trailer}
                      setPlaying={setPlaying}
                    ></TrailerPlayer>
                  </div>
                </div>
              ) : (
                <>
                  {trailer ? (
                    <button
                      className={styles.buttonTrailer}
                      onClick={() => setPlaying(true)}
                      type="button"
                    >
                      Reproducir Trailer
                    </button>
                  ) : (
                    <div>Lo siento, trailer no disponible</div>
                  )}
                </>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviesDetails;
