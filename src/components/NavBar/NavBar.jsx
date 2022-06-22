import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="bg-img">
      <Link to="/" className="title">
        <h1>
          NATIVA <br /> COLLECTION
        </h1>
      </Link>

      <div>
        <div>
          <Navbar expand="sm">
            <Container fluid>
              <Navbar.Brand href="#"></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Link to={`/tienda`} className="navbarLink">
                    Home
                  </Link>
                  <Link to={`/categoria/corpiños`} className="navbarLink">
                    Corpiños
                  </Link>
                  <Link to={`/categoria/bombachas`} className="navbarLink">
                    Bombachas
                  </Link>
                  <Link to={`/lamarca`} className="navbarLink">
                    La marca
                  </Link>
                </Nav>
              </Navbar.Collapse>
              <CartWidget />
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
