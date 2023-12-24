const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 text-white absolute bg-gradient-to-r from-gray-800">
      <h1 className=" text-xl font-bold md:text-5xl">{title}</h1>
      <p className="hidden md:inline-block py-6 w-1/4 text-lg">{description}</p>
      <div>
        <button className="bg-white text-black font-bold py-1 md:p-4 px-2 md:px-6 text-xl rounded-lg mr-1 hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="hidden md:inline-block bg-gray-700 text-white p-4 px-6 text-xl rounded-lg ml-1">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
