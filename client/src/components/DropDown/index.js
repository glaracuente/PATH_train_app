import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import "./style.css";

class DropDown extends Component {
  state = {
    btnTitle: "Current Station"
  };

  handleClick = event => {
    event.preventDefault();
    console.log(event);
    this.setState({ btnTitle: event.target.innerText });
  };

  render() {
    return (
      <div>
        <DropdownButton
          alignRight
          title={this.state.btnTitle}
          id="dropdown-menu-align-right"
        >
          {this.props.stations.map(station => (
            <Dropdown.Item key={station} onClick={this.handleClick}>
              {station}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    );
  }
}

export default DropDown;
