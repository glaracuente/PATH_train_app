import React, { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

class DropDown extends Component {
  state = {
    btnTitle: this.props.title
  };

  handleClick = event => {
    event.preventDefault();
    this.setState({ btnTitle: event.target.innerText });
    this.props.onUpdate(event.target.innerText);
  };

  render() {
    return (
      <div>
        <DropdownButton title={this.state.btnTitle}>
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
