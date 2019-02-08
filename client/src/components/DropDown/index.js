import React, { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./style.css";

class DropDown extends Component {
  state = {
    btnTitle: this.props.title
  };

  handleClick = event => {
    event.preventDefault();
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
