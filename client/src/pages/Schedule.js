import React, { Component } from "react";
import DropDown from "../components/DropDown";

class Schedule extends Component {
  state = {
    stations: ["Hoboken to 33rd", "WTC to JSQ", "NWK to WTC"],
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
        <DropDown title="Route" stations={this.state.stations} />
      </div>
    );
  }
}

export default Schedule;