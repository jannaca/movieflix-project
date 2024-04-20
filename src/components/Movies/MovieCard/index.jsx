import ButtonSeeMore from "../../ButtonSeeMore";
import ButtonToAddToWatchList from "../../ButtonToAddToWatchList";
import ButtonToAddToWatchedList from "../../ButtonToAddToWatchedList";
import styles from "./MovieCard.module.css";

const MovieCard = ({
  title,
  image,
  OnDetailClick,
  OnAddToWatchList,
  OnAddToWatchedList,
}) => {
  return (
    <div className={styles.container}>
      <img src={image} alt={title} className={styles.imageStyle} />
      <div className={styles.overlay}>
        <h4 className={styles.titleStyle}>{title}</h4>
        <div className="mt-2">
          <ButtonSeeMore OnDetailClick={OnDetailClick} />
          <ButtonToAddToWatchList OnAddToWatchList={OnAddToWatchList} />
          <ButtonToAddToWatchedList OnAddToWatchedList={OnAddToWatchedList} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
