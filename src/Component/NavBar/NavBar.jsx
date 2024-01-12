import React from "react";
import "./NavBarStyle.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavScrollExample({ logo, title, btn }) {
  return (
    <Navbar expand="lg d-flex justify-content-between align-items-center  flex-wrap position-fixed mt-2  z-2 cont ">
      <Container fluid>
        <img src={logo} />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="NavFormat d-flex   ">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div className="title d-flex justify-content-between align-items-center   ">
                {title.map((Element, index) => {
                  return (
                    <Link className="lnk" key={index} to={Element.path}>{Element.ele} </Link>
                  );
                })}
              </div>
            </Nav>

            <Button className="btnNav">{btn}</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
