import React, { Component } from "react";
import DropDown from "../components/DropDown";
import Img from "../components/Img";

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
        <Img />
      </div>
    );
  }
}

export default Schedule;
