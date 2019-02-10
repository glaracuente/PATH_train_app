import React, { Component } from "react";

class TimeTable extends Component {
  state = {
    btnTitle: ""
  };

  render() {
    return (
      <>
        <h1>{this.props.timelist}</h1>
      </>
    );
  }
}

export default TimeTable;
