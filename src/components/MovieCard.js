import { IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-32 pr-2 md:w-48 md:pr-4">
      <img alt="movieCard img" src={IMG_URL + posterPath} />
    </div>
  );
};
export default MovieCard;
