import { create } from "zustand";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "a70396116933facf5bbc5722a24025ea";

const useMoviesDetailResults = create((set) => ({
  trailer: null,
  movieDetail: null,
  fetchMovieDetail: async (movieId) => {
    try {
      const response = await fetch(
        `${API_URL}/movie/${movieId}?language=es&api_key=${API_KEY}`
      );
      const data = await response.json();
      // console.log(data)
      await set(() => ({ movieDetail: data }));
    } catch (error) {
      console.log(error);
    }
  },
  fetchMovieVideo: async (movieId) => {
   
    try {
      const response = await fetch(
        `${API_URL}/movie/${movieId}/videos?language=es&api_key=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);

      if (data.results) {
        const findTrailer = data.results.find(
          (video) => video.name === "Tráiler Oficial en español"
        );

        await set(() => ({
          trailer: findTrailer ? findTrailer : data.results[0],
        }));
      }
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useMoviesDetailResults;
