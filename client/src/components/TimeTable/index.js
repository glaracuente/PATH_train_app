import React, { Component } from "react";
import StationTimeRow from "../StationTimeRow";
import { Container, Row } from "react-bootstrap";

class TimeTable extends Component {
  render() {
    let baseArray = [];

    return (
      <>
        <Container>
          <Row>
            {this.props.timelist.map((timeArray, x) => {
              let thisarr = timeArray.splice(1);

              if (x === 0) {
                for (var i = 0; i < thisarr.length; i++) {
                  baseArray[i] = [thisarr[i]];
                }
              }

              if (x > 0) {
                for (var i = 0; i < baseArray.length; i++) {
                  baseArray[i].push(thisarr[i]);
                }
              }
            })}
            {baseArray.map((row, i) => {
              return <StationTimeRow key={i} stationRow={row} />;
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default TimeTable;
