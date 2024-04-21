import styles from "../ButtonToAddToWatchList/ButtonToAddToWatchList.module.css";

const ButtonSeeMore = ({ OnDetailClick }) => {
  return (
    <button onClick={OnDetailClick} className={styles.buttonListStyle}>
      <i className="bi bi-zoom-in"></i>
    </button>
  );
};

export default ButtonSeeMore;
