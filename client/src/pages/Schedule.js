import React, { Component } from "react";
import DropDown from "../components/DropDown";
import TimeTable from "../components/TimeTable";
import API from "../utils/API";
import { Container, Row, Col } from "react-bootstrap";

class Schedule extends Component {
  state = {
    stations: {
      "Journal Square -> 33rd Street": "861",
      "Hoboken -> 33rd Street": "859",
      "Hoboken -> World Trade Center": "860",
      "Newark -> World Trade Center": "862",
      //"Journal Square -> World Trade Center (via Hoboken)": "11048", ------Before 6AM Stuff
      //"World Trade Center --> Journal Square (via Hoboken)": "11048", ------Before 6AM Stuff
      // "Journal Square -> Hoboken": "4768", ------ ???
      // "Hoboken --> Journal Square": "4768", ------ ???
      //"Journal Square -> 33rd Street (via Hoboken)": "1024", ------ Hoboken out of order, maybe due to stop_id
      //"33rd Street --> Journal Square (via Hoboken)": "1024", ------ Hoboken out of order, maybe due to stop_id
      "33rd Street --> Journal Square": "861",
      "33rd Street --> Hoboken": "859",
      "World Trade Center --> Hoboken": "860",
      "World Trade Center --> Newark": "862"
    },
    timelist: []
  };

  updateTimeList = routeText => {
    let dir = 1;
    if (routeText.includes("-->")) {
      dir = 0;
    }
    this.renderSchedules(this.state.stations[routeText], dir);
  };

  renderSchedules = (routeid, dir) => {
    console.log("renderSchedules for: " + routeid + " with dir " + dir);
    let myvar = "sort()";

    if (dir === 0) {
      myvar = "sort().reverse()";
    }

    API.getTimes(routeid, dir)
      .then(res => this.setState({ timelist: eval(`res.data.${myvar}`) }))
      .catch(err => console.log(err));

    API.postLastRoute(routeid, dir)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    console.log("didMount");
    this.renderSchedules("77", 0);
  }

  render() {
    console.log("render");
    let divStyle = {
      width: "100px"
    };
    return (
      <div>
        <Container>
          <Row className="mx-auto mr-1 m-3" style={divStyle}>
            <Col>
              <DropDown
                title="Route"
                stations={Object.keys(this.state.stations)}
                onUpdate={this.updateTimeList}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <TimeTable timelist={this.state.timelist} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Schedule;
