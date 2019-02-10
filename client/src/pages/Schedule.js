import React, { Component } from "react";
import DropDown from "../components/DropDown";
import TimeTable from "../components/TimeTable";
import API from "../utils/API";
//import { Container, Row, Col } from "react-bootstrap";

class Schedule extends Component {
  state = {
    stations: [
      "Journal Square -> 33rd Street",
      "Journal Square <- 33rd Street",
      "Journal Square -> World Trade Center (via Hoboken)",
      "Journal Square <- World Trade Center (via Hoboken)",
      "Journal Square -> Hoboken",
      "Journal Square <- Hoboken",
      "Journal Square -> 33rd Street (via Hoboken)",
      "Journal Square <- 33rd Street (via Hoboken)",
      "Hoboken -> World Trade Center",
      "Hoboken <- World Trade Center",
      "Hoboken -> 33rd Street",
      "Hoboken <- 33rd Street",
      "Newark -> World Trade Center",
      "Newark <- World Trade Center"
    ],

    routeid: "77",
    timelist: []
  };

  updateTimeList = routeText => {
    console.log(routeText);
    this.setState({ routeid: "859" });

    this.renderSchedules(); // this happens too late because of race condition
  };

  renderSchedules = () => {
    console.log("renderSchedules");
    API.getTimes(this.state.routeid)
      .then(res => this.setState({ timelist: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    console.log("didMount");
    this.renderSchedules();
  }

  render() {
    console.log("render");
    return (
      <div>
        <DropDown
          title="Route"
          stations={this.state.stations}
          onUpdate={this.updateTimeList}
        />
        <TimeTable timelist={this.state.timelist} />
      </div>
    );
  }
}

export default Schedule;
