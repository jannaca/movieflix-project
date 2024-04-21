import YouTube from "react-youtube";
import styles from "../MovieDetails/MovieDetails.module.css";

const TrailerPlayer = ({ trailer, setPlaying }) => {
  const opts = {
    width: "100%",
    height: "650px",
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
      <button
        className={styles.buttonTrailer}
        onClick={() => setPlaying(false)}
      >
        Cerrar
      </button>
    </>
  );
};

export default TrailerPlayer;
