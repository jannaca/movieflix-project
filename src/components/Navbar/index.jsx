import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./Navbar.module.css";

const MyNavbar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" >
        <Container >
          <Navbar.Brand href="#home" >Navbar</Navbar.Brand >
          <Nav className="ms-auto" >
            <Nav.Item className={styles.navItem}> 
              <Link to="/" className={styles.navItem}>Inicio</Link>
            </Nav.Item>

            <NavDropdown title="Listas de Peliculas"  >
              <Nav.Item className={styles.navItemDropdown}>
                <Link to="/watched-movies" className={styles.navItem}>Peliculas Vistas</Link>
              </Nav.Item>
              <Nav.Item className={styles.navItemDropdown}>
                <Link to="/to-watch-movies" className={styles.navItem}>Peliculas Por Ver</Link>
              </Nav.Item>
            </NavDropdown>
            <Nav.Item className={styles.navItem}>
              <Link to="/subscribe" className={styles.navItem}>Suscribete</Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
