import React, { Component } from "react";
import { Table } from "react-bootstrap";

class TimeTable extends Component {
  state = {
    stations: {
      "Journal Square":
        "https://www.google.com/maps?ll=40.736818,-74.060974&z=14&t=m&hl=en&gl=US&mapclient=embed&cid=12020642236028137874",
      Hoboken:
        "https://www.google.com/maps?ll=40.739776,-74.026498&z=14&t=m&hl=en&gl=US&mapclient=embed&cid=2863390978307345103",
      Harrison:
        "https://www.google.com/maps?ll=40.742956,-74.153835&z=14&t=m&hl=en&gl=US&mapclient=embed&cid=8400771671130199586",
      Newark:
        "https://www.google.com/maps?ll=40.734696,-74.164464&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=308656798321746551",
      "Christopher Street":
        "https://maps.google.com/maps?ll=40.737448,-74.00511&z=14&t=m&hl=en&gl=US&mapclient=embed&cid=4857491562331683574",
      "9th Street":
        "https://www.google.com/maps/place/9th+Street+Station/@40.7342355,-74.0009907,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25996eca41fcf:0xbfca67c60cd0a78a!8m2!3d40.7342315!4d-73.998802?hl=en",
      "14th Street":
        "https://www.google.com/maps?ll=40.741815,-73.995076&z=14&t=m&hl=en&gl=US&mapclient=embed&cid=6690287804354820359",
      "23rd Street":
        "https://www.google.com/maps?ll=40.747288,-73.990901&z=14&t=m&hl=en&gl=US&mapclient=embed&cid=12018245571535861357",
      "33rd Street":
        "https://www.google.com/maps?ll=40.753221,-73.986576&z=14&t=m&hl=en&gl=US&mapclient=embed&cid=10004935632305357969",
      "Grove Street":
        "https://www.google.com/maps?ll=40.723998,-74.040751&z=14&t=m&hl=en&gl=US&mapclient=embed&cid=5802711562498662592",
      Newport:
        "https://www.google.com/maps?ll=40.731218,-74.032319&z=14&t=m&hl=en&gl=US&mapclient=embed&cid=6887656350950578930",
      "Exchange Place":
        "https://maps.google.com/maps?ll=40.716104,-74.033091&z=16&t=m&hl=en-US&gl=US&mapclient=embed&q=Exchange%20Place%20Jersey%20City%2C%20NJ%2007302",
      "World Trade Center":
        "https://www.google.com/maps/place/World+Trade+Center/@40.7126492,-74.0120867,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25a191cac2c15:0x7f33d7e5a45131b9!8m2!3d40.7126452!4d-74.009898?hl=en-US"
    }
  };

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
                    return (
                      <th>
                        <a target="_blank" href={this.state.stations[column]}>
                          {column}
                        </a>{" "}
                      </th>
                    );
                  }
                  if (column) {
                    return (
                      <td>
                        {column.split(":")[0] + ":" + column.split(":")[1]}
                      </td>
                    );
                  } else {
                    return <td>{column}</td>;
                  }
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
