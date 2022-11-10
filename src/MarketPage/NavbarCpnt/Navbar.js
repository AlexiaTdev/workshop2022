import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';


export class NavbarCpnt extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Aboutus">À propose de nous</Nav.Link>
              <Nav.Link href="/Service">Service</Nav.Link>
              <Nav.Link href="/Entreprise">Entreprise</Nav.Link>
              <Nav.Link href="/Particulier">Particulier</Nav.Link>
              <Nav.Link href="/Monitoring">Monitoring</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="">S'inscrire</Nav.Link>
              <Nav.Link href="">Se connecter</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default NavbarCpnt