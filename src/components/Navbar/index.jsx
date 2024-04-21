import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbar.module.css";

const MyNavbar = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className={styles.navBarContainer}
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand className={styles.navBarBrand}>
            {" "}
            <span className={styles.honkLogo}>MovieFlix</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item className={styles.navItem}>
                <Link to="/" className={styles.navItem}>
                  Inicio
                </Link>
              </Nav.Item>
              <Nav.Item className={styles.navItem}>
                <Link to="/favorite-movies" className={styles.navItem}>
                  Favoritos
                </Link>
              </Nav.Item>
              <Nav.Item className={styles.navItem}>
                <Link to="/to-watch-movies" className={styles.navItem}>
                  WatchList
                </Link>
              </Nav.Item>
              <Nav.Item className={styles.navItem}>
                <Link to="/subscribe" className={styles.navItem}>
                  Suscríbete
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
