import { useState, useEffect } from "react";

const useListsMovies = () => {
  // Establecer Lista de Peliculas vistas
  const [favoriteList, setFavoriteList] = useState(
    localStorage.getItem("favoriteList")
      ? JSON.parse(localStorage.getItem("favoriteList"))
      : []
  );

  // Establecer Lista de Peliculas para ver
  const [watchList, setWatchList] = useState(
    localStorage.getItem("watchList")
      ? JSON.parse(localStorage.getItem("watchList"))
      : []
  );

  //Agrego una pelicula a la lista
  const addToFavoriteList = (movie) => {
    const alreadyAdded = favoriteList.find((item) => item.id === movie.id);

    if (!alreadyAdded) {
      setFavoriteList((prevFavoriteList) => [...prevFavoriteList, movie]);
    } else {
      console.log("Ya esta agregada");
    }
  };

  const addToWatchList = (movie) => {
    const alreadyAdded = watchList.find((item) => item.id === movie.id);

    if (!alreadyAdded) {
      setWatchList((prevWatchList) => [...prevWatchList, movie]);
    } else {
      console.log("Ya esta agregada en la lista de películas para ver!");
    }
  };

  //Actualizo cada vez que las listas cambian
  useEffect(() => {
    localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
  }, [favoriteList]);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);

  // Eliminar una película

  const handleDeleteFavoriteMovie = (id) => {
    // Filtra la lista de observación para eliminar la película con el ID dado
    const updatedWatchList = favoriteList.filter((movie) => movie.id !== id);
    // Actualiza la lista de observación
    setFavoriteList(updatedWatchList);
    localStorage.setItem("favoriteList", JSON.stringify(updatedWatchList));
  };

  const handleDeleteWatchMovie = (id) => {
    const updatedWatchList = watchList.filter((movie) => movie.id !== id);
    setWatchList(updatedWatchList);
    localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
  };

  return {
    addToWatchList,
    addToFavoriteList,
    watchList,
    favoriteList,
    handleDeleteFavoriteMovie,
    handleDeleteWatchMovie,
  };
};

export default useListsMovies;
