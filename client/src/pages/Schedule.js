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

    day: "",
    timelist: []
  };

  updateTimeList = () => {
    console.log("UPDATE LIST");
  };

  consoleTimes = () => {
    API.getTimes()
      .then(res => this.setState({ timelist: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.consoleTimes();
  }

  render() {
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
