import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { ReactComponent as Logo } from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css';

function Header() {
  return (
    /**
    <Navbar padding="1 rem"collapseOnSelect expand="always" bg="light" variant="light">
      <Navbar.Brand href="/">
        <Logo
          alt=""
          width="50"
          height="50"
          className="d-inline-block align-top"

        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Levels" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/game">Easy</NavDropdown.Item>
            <NavDropdown.Item href="/game">
              Medium
            </NavDropdown.Item>
            <NavDropdown.Item href="/game">Hard</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/help">Help</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      */
    <nav>

      <ul>
      <Logo
          alt=""
          width="50"
          height="50"
          className="d-inline-block align-top"

        />
      </ul>
      <div class="logo">
      </div>
      <ul>
      </ul>
    </nav>
  );
}

export default Header