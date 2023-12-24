import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainConatiner = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;
  const mainMovie = movies[0];
  //   console.log(mainMovie);

  const { original_title, overview } = mainMovie;

  //   console.log(mainMovie);
  return (
    <div className="pt-[35%] bg-black md:pt-0">
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground movieId={mainMovie.id} />
    </div>
  );
};
export default MainConatiner;
