import ButtonSeeMore from "../../ButtonSeeMore";
import ButtonToAddToWatchList from "../../ButtonToAddToWatchList";
import ButtonToAddToWatchedList from "../../ButtonToAddToWatchedList";

const MovieCard = ({
  title,
  image,
  OnDetailClick,
  OnAddToWatchList,
  OnAddToWatchedList,
}) => {
  return (
    <div>
      <h4>{title}</h4>
      <img src={image} alt={title} height={600} width={400} />
      <ButtonSeeMore OnDetailClick={OnDetailClick} />
      <ButtonToAddToWatchList OnAddToWatchList={OnAddToWatchList} />
      <ButtonToAddToWatchedList OnAddToWatchedList={OnAddToWatchedList} />
    </div>
  );
};

export default MovieCard;
