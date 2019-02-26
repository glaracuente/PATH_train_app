import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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

const Alerts = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <br />
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="pathalerts"
              options={{ height: 1000 }}
            />
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Alerts;
