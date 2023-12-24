import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMainMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const FETCH_TRAILER = "https://api.themoviedb.org/3/movie/";

  const getMovieTrailer = async () => {
    const allTypeVideos = await fetch(
      FETCH_TRAILER + movieId + "/videos",
      API_OPTIONS
    );
    const data = await allTypeVideos.json();
    const filterTrailer = data.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailer.length ? filterTrailer[0] : data.results[0];
    dispatch(addTrailerVideo(trailer));
    // console.log(trailer);
    // setTrailer(data.results);
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMainMovieTrailer;
