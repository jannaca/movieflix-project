import styles from "../ButtonToAddToWatchList/ButtonToAddToWatchList.module.css";

const ButtonAddToFavorites = ({ OnAddToFavorites }) => {
  return (
    <button
      onClick={OnAddToFavorites}
      className={styles.buttonListStyle}
      data-testid="button-favorites"
    >
      <i className="bi bi-suit-heart-fill"></i>
    </button>
  );
};

export default ButtonAddToFavorites;
