import { useSelector } from "react-redux";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainConatiner from "./MainConatiner";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptScreen = useSelector((store) => store.gpt.showGptScreen);
  useNowPlayingMovie();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptScreen ? (
        <GptSearch />
      ) : (
        <>
          <MainConatiner />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
