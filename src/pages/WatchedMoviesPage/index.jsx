import WatchedMovies from "../../components/WatchedMovies";
import useListsMovies from "../../hooks/useListsMovies";

const WatchedMoviesPage = () => {
  const { watchedList, handleDeleteWatchedMovie } = useListsMovies();

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
