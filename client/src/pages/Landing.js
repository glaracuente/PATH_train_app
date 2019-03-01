import React from "react";
import Img from "react-image";
import { Container, Row, Col } from "react-bootstrap";

function Landing() {
  const divStyle = {
    width: "100%"
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <br />
            <Img style={divStyle} src="Landing_image.jpg" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Landing;
