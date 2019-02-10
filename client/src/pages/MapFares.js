import React from "react";
import Img from "react-image";
import { Container, Row, Col } from "react-bootstrap";

const MapFares = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <Img src="nyc-path-map.png" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MapFares;
