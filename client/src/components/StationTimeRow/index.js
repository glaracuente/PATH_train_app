import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class StationTimeRow extends Component {
  render() {
    return (
      <>
        <Row>
          {this.props.stationRow.map((timeentry, i) => {
            return (
              <>
                <Col key={i}>{timeentry}</Col> <Col />
              </>
            );
          })}
        </Row>
      </>
    );
  }
}

export default StationTimeRow;
