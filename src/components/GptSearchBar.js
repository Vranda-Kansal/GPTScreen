import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  // const handleGptSearchClick = async () => {

  // };
  return (
    <div className="pt-[50%] md:pt-[8%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-gradient-to-r from-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-8"
          placeholder={lang[langkey].gptPlaceHolder}
        />
        <button className="col-span-3 m-4 px-4 py-2 bg-red-700 text-white rounded-lg">
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
