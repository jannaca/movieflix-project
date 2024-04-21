import { useEffect, useState } from "react";

const fetchMovieDetails = (movieId) => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "a70396116933facf5bbc5722a24025ea";

  const [trailer, setTrailer] = useState(null);
  const [movieDetail, setMovieDetail] = useState(null);

  const fetchMovieDetail = async () => {
    try {
      const response = await fetch(
        `${API_URL}/movie/${movieId}?language=es&api_key=${API_KEY}`
      );
      const data = await response.json();
      // console.log(data)
      setMovieDetail(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMovieVideo = async () => {
    try {
      const response = await fetch(
        `${API_URL}/movie/${movieId}/videos?language=es&api_key=${API_KEY}`
      );
      const data = await response.json();
      // console.log(data);
      if (data.results) {
        const findTrailer = data.results.find(
          (video) => video.name === "Tráiler Oficial en español"
        );

        setTrailer(findTrailer ? findTrailer : data.results[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovieDetail();
    fetchMovieVideo();
  }, [movieId]);

  return {
    trailer,
    movieDetail,
  };
};

export default fetchMovieDetails;
