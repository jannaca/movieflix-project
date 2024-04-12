import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useListsMovies from "../../hooks/useListsMovies";
import MovieCard from "./MovieCard";
import useMoviesResults from "../../state/movies-results";

const Movies = () => {
  // --- VARIABLES----
  const [searchKey, setSearchKey] = useState("");
  //Obtener Peliculas y ruta de las imagenes de la API
  const { movies, IMAGE_PATH, fetchMovies } = useMoviesResults();

  const { addToWatchList, addToWatchedList } = useListsMovies();

  useEffect(() => {
    fetchMovies(searchKey);
  }, [searchKey]);

  const navigate = useNavigate(); // permite dirigirme a otras rutas

  // --- FUNCIONES----
  //Evito que el Formulario se envie Automaticamente
  const searchMovies = (e) => {
    e.preventDefault();
    console.log(movies);
  };

  //Limpio el Input de Busqueda
  const deleteSearch = () => {
    setSearchKey("");
  };

  //Dirigo al usuario a la pagina de detalles
  const handleDetailClick = (id) => {
    navigate(`/detail/${id}`);
  };

  // --- FUNCIONES----

  return (
    <div>
      <div>
        <h2>Buscador</h2>
        <form onSubmit={searchMovies}>
          <input
            type="text"
            placeholder="Buscar"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <button onClick={() => deleteSearch()}>X</button>
        </form>
      </div>
      {searchKey === "" && <h2>Peliculas Populares</h2>}
      {movies.map((movie) => (
        <MovieCard
          key={`movie-item-${movie.id}`}
          title={movie.title}
          image={`${IMAGE_PATH}${movie.poster_path}`}
          OnDetailClick={() => handleDetailClick(movie.id)}
          OnAddToWatchList={() => addToWatchList(movie)}
          OnAddToWatchedList={() => addToWatchedList(movie)}
        />
      ))}
    </div>
  );
};

export default Movies;
