import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MoviesDetails from "../../components/MovieDetails";
import TrailerPlayer from "../../components/TrailerPlayer";
import useMoviesDetailResults from "../../state/movies-detail-results"
import "./index.css";

const Detail = () => {
  const { movieId } = useParams();
  const [playing, setPlaying] = useState(false);
  // const { movieDetail, trailer } = useFetchMovieDetails(movieId);
  const { movieDetail, trailer, fetchMovieDetail, fetchMovieVideo } =
    useMoviesDetailResults();

  useEffect(() => {
    fetchMovieDetail(movieId);
    fetchMovieVideo(movieId);
  }, [movieId]);

  return (
    <div>
      {movieDetail && <MoviesDetails movieDetail={movieDetail} />}
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
  );
};

export default Detail;
