import React, { Component } from "react";
import StationTimeColumn from "../StationTimeColumn";
import { Container, Row } from "react-bootstrap";

class TimeTable extends Component {
  render() {
    let myarr = ["1", "2"];

    return (
      <>
        <Container>
          <Row>
            {this.props.timelist.map((timeArray, i) => {
              let thisarr = timeArray.splice(1);

              myarr = myarr.map(function(v, x) {
                console.log(v);
                return [v, thisarr[x]];
              });

              return <StationTimeColumn key={i} stationColumn={thisarr} />;
            })}
            {console.log(myarr)}
          </Row>
        </Container>
      </>
    );
  }
}

export default TimeTable;
