import CartWidget from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router";

function NavBar({categories}){
    return(
        <Navbar expand="lg" style={{backgroundColor: '#9d00ff', boxShadow: '0 2px 10px rgba(157, 0, 255, 0.5)',}} variant="dark">
            <Container>
                <Navbar.Brand as={Link} to={'/'}>GOLAZO SHOP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                    {categories.map(category => (
                        <NavDropdown.Item as={Link} to={`/categories/${category}`}>{category}</NavDropdown.Item>
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