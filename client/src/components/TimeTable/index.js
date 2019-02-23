import React, { Component } from "react";
import StationTimeColumn from "../StationTimeColumn";
import { Container, Row } from "react-bootstrap";

class TimeTable extends Component {
  render() {
    let myarr = [["1"], ["2"]];
    let baseArray = [];

    return (
      <>
        <Container>
          <Row>
            {this.props.timelist.map((timeArray, i) => {
              let thisarr = timeArray.splice(1);

              if (i === 0) {
                for (var i = 0; i < thisarr.length; i++) {
                  baseArray[i] = [thisarr[i]];
                }
              }

              if (i > 0) {
                for (var i = 0; i < baseArray.length; i++) {
                  baseArray[i].push(thisarr[i]);
                  //console.log(tmp);
                  //myarr[i] = temp.push(thisarr[i]);
                  //console.log(myarr);
                }
              }
              console.log(baseArray);

              return <StationTimeColumn key={i} stationColumn={thisarr} />;
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default TimeTable;
