import styles from "./ButtonToAddToWatchList.module.css";

const ButtonToAddToWatchList = ({ OnAddToWatchList }) => {
  return (
    <button onClick={OnAddToWatchList} className={styles.buttonListStyle}
    data-testid="button-watchList">
      <i className="bi bi-eye-fill"></i>
    </button>
  );
};

export default ButtonToAddToWatchList;
