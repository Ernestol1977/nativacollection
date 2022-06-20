import { Container, Nav, Navbar } from "react-bootstrap"

import './'

const NavBar = () => {
    return (
        <div>
            <div>
                <Navbar expand="sm" navbar-center>
                    <Container fluid>
                        <Navbar.Brand href="#"></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link  href="#action2">La marca</Nav.Link>
                                <Nav.Link href="#action3">Corpiños</Nav.Link>
                                <Nav.Link href="#action4">Bombachas</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}

export default NavBar