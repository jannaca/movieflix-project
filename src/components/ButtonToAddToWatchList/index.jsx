import styles from "./ButtonToAddToWatchList.module.css";

const ButtonToAddToWatchList = ({ OnAddToWatchList }) => {
  return (
    <button onClick={OnAddToWatchList} className={styles.buttonListStyle}>
      <i className="bi bi-eye-fill"></i>
    </button>
  );
};

export default ButtonToAddToWatchList;
