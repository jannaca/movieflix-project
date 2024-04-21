import ButtonSeeMore from "../../ButtonSeeMore";
import ButtonToAddToWatchList from "../../ButtonToAddToWatchList";
import ButtonAddToFavorites from "../../ButtonAddToFavorites";
import styles from "./MovieCard.module.css";

const MovieCard = ({
  title,
  image,
  OnDetailClick,
  OnAddToWatchList,
  OnAddToFavorites,
}) => {
  return (
    <div className={styles.container}>
      <img src={image} alt={title} className={styles.imageStyle} />
      <div className={styles.overlay}>
        <h4 className={styles.titleStyle}>{title}</h4>
        <div className="mt-2">
          <ButtonSeeMore OnDetailClick={OnDetailClick} />
          <ButtonToAddToWatchList OnAddToWatchList={OnAddToWatchList} />
          <ButtonAddToFavorites OnAddToFavorites={OnAddToFavorites} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
