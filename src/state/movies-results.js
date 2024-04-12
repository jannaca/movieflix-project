import { create } from "zustand";

const useMoviesResults = create((set) => ({
  movies: [],
  IMAGE_PATH: "https://image.tmdb.org/t/p/original",
  fetchMovies: async (searchKey) => {
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "a70396116933facf5bbc5722a24025ea";
    const API_LANGUAGE = "es";
    const type = searchKey ? "search" : "discover";
    try {
      const response = await fetch(
        `${API_URL}/${type}/movie?query=${searchKey}&language=${API_LANGUAGE}&include_adult=false&api_key=${API_KEY}`
      );
      const data = await response.json();
    
      await set(()=>({movies: data.results}))
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useMoviesResults;
