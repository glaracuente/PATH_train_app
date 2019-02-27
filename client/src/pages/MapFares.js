import React from "react";
import Img from "react-image";
import { Container, Row, Col } from "react-bootstrap";

const MapFares = () => {
  const divStyle = {
    width: "100%"
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <br />
            <h3>
              PATH’s World Trade Center Station will be closed weekends
              beginning January 5, 2019, through December 20, 2020, excluding
              major holidays, from 12:01 a.m. on Saturdays until 5 a.m. on
              Mondays.
            </h3>
            <br />
            <Img style={divStyle} src="nyc-path-map.jpg" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MapFares;
