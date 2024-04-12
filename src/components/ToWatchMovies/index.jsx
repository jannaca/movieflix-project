import ButtonSeeMore from "../ButtonSeeMore";
import { useNavigate } from "react-router-dom";
import useMoviesResults from "../../state/movies-results"

const ToWatchMovies = ({ watchList, onDeleteWatchMovie, OnWatchedMovie }) => {
  const navigate = useNavigate(); // permite dirigirme a otras rutas
  const {IMAGE_PATH} = useMoviesResults()
  const handleDetailClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div>
      {watchList.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.title}</h4>
          <img
            src={`${IMAGE_PATH}${movie.poster_path}`}
            alt={movie.title}
            height={600}
            width={400}
          />
          <ButtonSeeMore OnDetailClick={() => handleDetailClick(movie.id)} />
          <button onClick={() => onDeleteWatchMovie(movie.id)}>Eliminar</button>
          <button onClick={() => OnWatchedMovie(movie)}>Vista</button>
        </div>
      ))}
    </div>
  );
};

export default ToWatchMovies;
