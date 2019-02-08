import React, { Component } from "react";
import DropDown from "../components/DropDown";
import { Container, Row, Col } from "react-bootstrap";

class NextTrain extends Component {
  state = {
    stations: ["Hoboken", "Christopher", "9th", "14th", "23rd", "33rd"],
    currentStation: "",
    destinationStation: "",
    day: ""
  };

  /*componentDidMount() {
    this.setState({ book: times });
    console.log(this.state.book);
  }*/

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={6} md={6}>
              <DropDown
                title="Current Station"
                stations={this.state.stations}
              />
            </Col>
            <Col xs={6} md={6}>
              <DropDown title="Destination" stations={this.state.stations} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NextTrain;
