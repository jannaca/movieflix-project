import { useEffect, useState } from "react";

const useFetchMoviesData = (searchKey) => {
  // API
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "a70396116933facf5bbc5722a24025ea";
  const API_LANGUAGE = "es";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  //Variables de estado
  const [movies, setMovies] = useState([]);

  //Llamada a la API
  const fetchMovies = async () => {
    const type = searchKey ? "search" : "discover";
    try {
      const response = await fetch(
        `${API_URL}/${type}/movie?query=${searchKey}&language=${API_LANGUAGE}&include_adult=false&api_key=${API_KEY}`
      );
      const data = await response.json();
      //   console.log(data);
      setMovies(data.results);
      // console.log(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [searchKey]);

  return {
    movies,
    IMAGE_PATH,
    fetchMovies,
  };
};

export default useFetchMoviesData;
