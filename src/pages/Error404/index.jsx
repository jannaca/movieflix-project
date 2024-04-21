import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import styles from "./Error404.module.css";

const Error404 = () => {
  return (
    <Container className="text-center mt-5">
      <h1 className={styles.honkLogo}>¡Ooops!</h1>
      <h3>Parece que hubo un error.</h3>
      <h4>Página no encontrada.</h4>
      <p className={styles.emoji}>😥</p>
      <Link className={styles.startNow} to="/">
        Vuelve a la página
      </Link>
    </Container>
  );
};

export default Error404;
