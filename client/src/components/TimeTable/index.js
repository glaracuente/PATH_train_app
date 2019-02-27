import React, { Component } from "react";
import { Table } from "react-bootstrap";

class TimeTable extends Component {
  render() {
    let baseArray = [];

    return (
      <Table striped bordered responsive="sm" hover size="sm">
        <thead />
        <tbody>
          {this.props.timelist.map((timeArray, x) => {
            let thisarr = timeArray.splice(1);

            if (x === 0) {
              for (var i = 0; i < thisarr.length; i++) {
                baseArray[i] = [thisarr[i]];
              }
            }

            if (x > 0) {
              for (var i = 0; i < baseArray.length; i++) {
                baseArray[i].push(thisarr[i]);
              }
            }
          })}

          {baseArray.map((row, a) => {
            return (
              <tr>
                {row.map((column, b) => {
                  if (a === 0) {
                    return <th>{column}</th>;
                  }
                  return (
                    <td>{column.split(":")[0] + ":" + column.split(":")[1]}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default TimeTable;
