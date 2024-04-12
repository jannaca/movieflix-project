import { useState, useEffect } from "react";

const useListsMovies = () => {
  // Establecer Lista de Peliculas vistas
  const [watchedList, setWatchedList] = useState(
    localStorage.getItem("watchedList")
      ? JSON.parse(localStorage.getItem("watchedList"))
      : []
  );

  // Establecer Lista de Peliculas para ver
  const [watchList, setWatchList] = useState(
    localStorage.getItem("watchList")
      ? JSON.parse(localStorage.getItem("watchList"))
      : []
  );

  //Agrego una pelicula a la lista
  const addToWatchedList = (movie) => {
    const alreadyAdded = watchedList.find((item) => item.id === movie.id);

    if (!alreadyAdded) {
      setWatchedList((prevWatchedlist) => [...prevWatchedlist, movie]);
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
    localStorage.setItem("watchedList", JSON.stringify(watchedList));
  }, [watchedList]);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);

  // Eliminar una película

  const handleDeleteWatchedMovie = (id) => {
    // Filtra la lista de observación para eliminar la película con el ID dado
    const updatedWatchList = watchedList.filter((movie) => movie.id !== id);
    // Actualiza la lista de observación
    setWatchedList(updatedWatchList);
    localStorage.setItem("watchedList", JSON.stringify(updatedWatchList));
  };

  const handleDeleteWatchMovie = (id) => {
    const updatedWatchList = watchList.filter((movie) => movie.id !== id);
    setWatchList(updatedWatchList);
    localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
  };

  return {
    addToWatchList,
    addToWatchedList,
    watchList,
    watchedList,
    handleDeleteWatchedMovie,
    handleDeleteWatchMovie,
  };
};

export default useListsMovies;
