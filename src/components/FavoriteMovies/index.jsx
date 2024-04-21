import ButtonSeeMore from "../ButtonSeeMore";
import { useNavigate } from "react-router-dom";

import { Row, Col, Container } from "react-bootstrap";
import styles from "./FavoriteMovies.module.css";

const FavoriteMovies = ({ favoriteList, onDeleteFavoriteMovie }) => {
  const navigate = useNavigate(); // permite dirigirme a otras rutas
  const handleDetailClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <Container>
      <Row xs={1} md={3} lg={4} className="g-4">
        {favoriteList.map((movie) => (
          <Col key={movie.id} className="d-flex">
            <div className={styles.container}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                className={styles.imageStyle}
              />
              <div className={styles.overlay}>
                <h4 className={styles.titleStyle}>{movie.title}</h4>

                <div>
                <ButtonSeeMore
                  OnDetailClick={() => handleDetailClick(movie.id)}
                />
                <button className={styles.buttonListStyle} onClick={() => onDeleteFavoriteMovie(movie.id)}>
                <i class="bi bi-x-lg"></i>
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

export default FavoriteMovies;
