import React, { Component } from "react";
import DropDown from "../components/DropDown";

class Schedule extends Component {
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
        <DropDown title="Current Station" stations={this.state.stations} />
        <DropDown title="Destination" stations={this.state.stations} />
      </div>
    );
  }
}

export default Schedule;
