import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MoviesDetails from "../../components/MovieDetails";
import useMoviesDetailResults from "../../state/movies-detail-results";

const Detail = () => {
  const { movieId } = useParams();
  const { movieDetail, fetchMovieDetail, fetchMovieVideo } =
    useMoviesDetailResults();

  useEffect(() => {
    fetchMovieDetail(movieId);
    fetchMovieVideo(movieId);
  }, [movieId]);

  return <>{movieDetail && <MoviesDetails movieDetail={movieDetail} />}</>;
};

export default Detail;
