import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class StationTimeColumn extends Component {
  render() {
    return (
      <>
        <Col>
          {this.props.stationColumn.map((timeentry, i) => {
            return (
              <>
                <Row key={i}>{timeentry}</Row> <Row />
              </>
            );
          })}
        </Col>
      </>
    );
  }
}

export default StationTimeColumn;
