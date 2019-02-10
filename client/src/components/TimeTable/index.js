import React, { Component } from "react";
import StationTimeColumn from "../StationTimeColumn";
import { Container, Row } from "react-bootstrap";

class TimeTable extends Component {
  render() {
    console.log(this.props.timelist);
    return (
      <>
        <Container>
          <Row>
            {this.props.timelist.sort().map((timeArray, i) => {
              return (
                <StationTimeColumn
                  key={i}
                  stationColumn={timeArray.splice(1)}
                />
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default TimeTable;
