import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button';

import '../assets/styles/components/AppNavbar.scss';
import '../assets/styles/components/Login.scss';
import image from '../assets/images/FreshGente1.png'
import { Link } from 'react-router-dom';

const AppNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="NavPadding">
            <Navbar.Brand>
                <Link to="/">
                    <img className="navbar_img" src={image} alt="home" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/">Home</Link>
                    <Link to="/cameras">Cameras</Link>
                    <Link to="/cameras">Videos</Link>

                    {/* <Nav.Link><Link to="/cameras">Cameras</Link></Nav.Link>
                    <Nav.Link></Nav.Link> */}
                    {/* <NavDropdown title="Videos" id="basic-nav-dropdown">
                        <NavDropdown.Item to="/cameras">Streaming</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item to="/">More Videos</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    {/* <Button variant="outline-success" >Login</Button> */}
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default AppNavbar;