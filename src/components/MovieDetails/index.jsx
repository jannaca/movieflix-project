import useListsMovies from "../../hooks/useListsMovies";
import useMoviesResults from "../../state/movies-results";
import ButtonToAddToWatchList from "../ButtonToAddToWatchList";
import ButtonToAddToWatchedList from "../ButtonToAddToWatchedList";
import TrailerPlayer from "../TrailerPlayer";
import { useState } from "react";
import useMoviesDetailResults from "../../state/movies-detail-results";
import Container from "react-bootstrap/Container";
import styles from "./MovieDetails.module.css";

const MoviesDetails = ({ movieDetail }) => {
  const { IMAGE_PATH } = useMoviesResults();
  const { addToWatchList, addToWatchedList } = useListsMovies();
  const { title, poster_path, overview, genres, release_date, runtime } =
    movieDetail;
  const [playing, setPlaying] = useState(false);
  const { trailer } = useMoviesDetailResults();
  return (
    <Container>
      <div className={styles.containerMovie}>
        <div className={styles.imageCotainer}>
          <img
            src={`${IMAGE_PATH + poster_path}`}
            alt={movieDetail.title}
            height={600}
            width={400}
          />
        </div>
        <div className={styles.infoMovieContainer}>
          <h1>{title}</h1>
          <p>Descripcion</p>
          <p>{overview}</p>
          <p>Generos</p>
          <ul>
            {genres.map((genre) => (
              <li key={`genre-${genre.id}`}>{genre.name}</li>
            ))}
          </ul>
          <p>Fecha de Lanzamiento</p>
          <p>{release_date}</p>
          <p>Duracion</p>
          <p>{`${runtime} min`} </p>
          <div>
            <ButtonToAddToWatchList
              OnAddToWatchList={() => addToWatchList(movieDetail)}
            />
            <ButtonToAddToWatchedList
              OnAddToWatchedList={() => addToWatchedList(movieDetail)}
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
      </div>
    </Container>
  );
};

export default MoviesDetails;
