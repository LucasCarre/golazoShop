import CartWidget from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar({categories}){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">GOLAZO SHOP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Camisetas</Nav.Link>
                    <Nav.Link href="#link">Shorts</Nav.Link>
                    <Nav.Link href="#link">Chombas</Nav.Link>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                    {categories.map(category => (
                        <NavDropdown.Item href="#">{category}</NavDropdown.Item>
                    ))}
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
    </Navbar>
    )
}

export default NavBar