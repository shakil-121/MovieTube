import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar className="opacity-70" collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">
            <img style={{height:"60px"}} src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
            </Nav>
            <Nav className="d-flex align-items-center">
            <Nav.Link className="fw-semibold" href="/booking">My Booking</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button className="px-5 rounded-5 border-0 fw-bold" style={{backgroundColor:"red",fontFamily:"roboto"}}>Subscribe</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
