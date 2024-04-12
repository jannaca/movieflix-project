import ToWatchMovies from "../../components/ToWatchMovies";
import useListMovies from "../../hooks/useListsMovies";

const ToWatchMoviesPage = () => {
  const { watchList, handleDeleteWatchMovie, addToWatchedList } =
    useListMovies();

  const handleMovieSaw = (movie) => {
    handleDeleteWatchMovie(movie.id); // Eliminar la película de la lista de películas por ver
    addToWatchedList(movie); // Agregar la película a la lista de películas vistas
  };

  return (
    <div>
      <h2>Watch List</h2>
      {watchList.length !== 0 ? (
        <ToWatchMovies
          watchList={watchList}
          onDeleteWatchMovie={handleDeleteWatchMovie}
          OnWatchedMovie={handleMovieSaw}
        />
      ) : (
        "No hay elementos"
      )}
    </div>
  );
};

export default ToWatchMoviesPage;
