import YouTube from "react-youtube";

const TrailerPlayer = ({ trailer, setPlaying }) => {
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      cc_load_policy: 0,
      fs: 0,
      iv_load_policy: 0,
      modestbranding: 0,
      rel: 0,
      showinfo: 0,
    },
  };

  return (
    <>
      <YouTube
        videoId={trailer ? trailer.key : ""}
        className="reproductor container"
        opts={opts}
      />
      <button onClick={() => setPlaying(false)} >
        Close
      </button>
    </>
  );
};

export default TrailerPlayer;
