import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from "react-twitter-embed";

class StationTimeRow extends Component {
  render() {
    return (
      <>
        <Row>
          {this.props.stationRow.map((timeentry, i) => {
            return (
              <>
                <Col key={i}>{timeentry}</Col> <Col />
              </>
            );
          })}
        </Row>
        <Row />
      </>
    );
  }
}

export default StationTimeRow;
