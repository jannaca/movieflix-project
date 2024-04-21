import ButtonSeeMore from "../ButtonSeeMore";
import { useNavigate } from "react-router-dom";
import useMoviesResults from "../../state/movies-results";
import { Row, Col, Container } from "react-bootstrap";
import styles from "./ToWatchMovies.module.css";

const ToWatchMovies = ({ watchList, onDeleteWatchMovie }) => {
  const navigate = useNavigate(); // permite dirigirme a otras rutas
  const { IMAGE_PATH } = useMoviesResults();
  const handleDetailClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <Container>
      <Row xs={1} md={3} lg={4} className="g-4">
        {watchList.map((movie) => (
          <Col key={movie.id} className="d-flex">
            <div className={styles.container}>
              <img
                src={`${IMAGE_PATH}${movie.poster_path}`}
                alt={movie.title}
                className={styles.imageStyle}
              />
              <div className={styles.overlay}>
                <h4 className={styles.titleStyle}>{movie.title}</h4>
                <div>
                  <ButtonSeeMore
                    OnDetailClick={() => handleDetailClick(movie.id)}
                  />
                  <button
                    className={styles.buttonListStyle}
                    onClick={() => onDeleteWatchMovie(movie.id)}
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ToWatchMovies;
