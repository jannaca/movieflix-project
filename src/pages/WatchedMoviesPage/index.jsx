import WatchedMovies from "../../components/WatchedMovies";
import useListMovies from "../../hooks/useListsMovies";

const WatchedMoviesPage = () => {
  const { watchedList, handleDeleteWatchedMovie } = useListMovies();

  return (
    <div>
      <h2>Watched List</h2>
      {watchedList.length !== 0 ? (
        <WatchedMovies
          watchedList={watchedList}
          onDeleteWatchedMovie={handleDeleteWatchedMovie}
        />
      ) : (
        "No hay elementos"
      )}
    </div>
  );
};

export default WatchedMoviesPage;
