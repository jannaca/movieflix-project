import ButtonSeeMore from "../ButtonSeeMore";
import { useNavigate } from "react-router-dom";

const WatchedMovies = ({ watchedList, onDeleteWatchedMovie }) => {
  const navigate = useNavigate(); // permite dirigirme a otras rutas
  const handleDetailClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div>
      {watchedList.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.title}</h4>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            height={600}
            width={400}
          />
          <ButtonSeeMore OnDetailClick={() => handleDetailClick(movie.id)} />
          <button onClick={() => onDeleteWatchedMovie(movie.id)}>
            Eliminar
          </button>
          <button>No Vista</button>
        </div>
      ))}
    </div>
  );
};

export default WatchedMovies;
