const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-3 px-10 font-bold text-xl rounded-md hover:bg-opacity-80">
          ▶  Play
        </button>
        <button className="bg-gray-500 mx-2 p-3 px-10 text-xl bg-opacity-45 rounded-md">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
