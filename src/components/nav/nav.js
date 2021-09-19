import React from "react";
import { Navbar, Container } from 'react-bootstrap'
import logo from '../../assets/unicad-logo.svg'
import './nav.css'


const NavBar = () => (

    <Navbar className="NavStyle" bg="light" expand="lg">
        <Container >
            <img src={logo} alt="logo-unicad" width="200px"  />
        </Container>
    </Navbar>

)

export default NavBar