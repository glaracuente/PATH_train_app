import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navi() {
  return (
    <>
      {" "}
      <Navbar expand="lg" bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="/">Catch Next Train</Nav.Link>
          <Nav.Link href="/schedule">Path Schedule</Nav.Link>
          <Nav.Link href="/mapfares">Map and Fare Info</Nav.Link>
          <Nav.Link href="/">Alerts</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Navi;
