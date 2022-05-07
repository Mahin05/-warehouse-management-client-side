import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css'


const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <>
            <Navbar collapseOnSelect sticky='top' expand="lg" variant="dark" className='bg-set'>
                <Container>
                    <Navbar.Brand as={Link} to="/" className='comp-name'>
                        ISLAMS VEHICLE CORPORATION
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='link-style text-white' href="home">Home</Nav.Link>
                            <Nav.Link className='link-style text-white' href="home#inventory">Items</Nav.Link>
                            <Nav.Link className='link-style text-white' as={Link} to="/blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <>
                                    <Nav.Link className='link-style text-white' as={Link} to="additem">Add Item</Nav.Link>
                                    <Nav.Link className='link-style text-white' as={Link} to="manageInventory">Manage Items</Nav.Link>
                                    <Nav.Link className='link-style text-white' as={Link} to="items">My Items</Nav.Link>

                                </>
                            }
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none link-style' onClick={logout}>Sign Out</button>
                                    :
                                    <Nav.Link className='link-style' as={Link} to="login">
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;