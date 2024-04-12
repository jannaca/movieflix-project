import useListsMovies from "../../hooks/useListsMovies";
import useMoviesResults from "../../state/movies-results";
import ButtonToAddToWatchList from "../ButtonToAddToWatchList";
import ButtonToAddToWatchedList from "../ButtonToAddToWatchedList";

const MoviesDetails = ({ movieDetail }) => {
  const { IMAGE_PATH } = useMoviesResults();
  const { addToWatchList, addToWatchedList } = useListsMovies();
  const { title, poster_path, overview, genres, release_date, runtime } =
    movieDetail;
  return (
    <div>
      <h1>{title}</h1>
      <img
        src={`${IMAGE_PATH + poster_path}`}
        alt={movieDetail.title}
        height={600}
        width={400}
      />
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
      </div>
    </div>
  );
};

export default MoviesDetails;
