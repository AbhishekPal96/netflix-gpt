const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[12%] px-2 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl mt-8 md:mt-0 font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black mt-2 md:mt-0 py-1 md:py-3 px-3 md:px-10 font-bold text-xl rounded-md hover:bg-opacity-80">
          ▶  Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 mx-2 p-3 px-10 text-xl bg-opacity-45 rounded-md">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
