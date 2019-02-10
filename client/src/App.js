import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NextTrain from "./pages/NextTrain";
import Schedule from "./pages/Schedule";
import NoMatch from "./pages/NoMatch";
import Navi from "./components/Navi";
import { Container, Row, Col } from "react-bootstrap";
import MapFares from "./pages/MapFares";

function App() {
  return (
    <Router>
      <div>
        <Container>
          <Row>
            <Col>
              <Navi />
              <Row>
                <Col>
                  <Switch>
                    <Route exact path="/" component={NextTrain} />
                    <Route exact path="/schedule" component={Schedule} />
                    <Route exact path="/mapfares" component={MapFares} />
                    <Route component={NoMatch} />
                  </Switch>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        ;
      </div>
    </Router>
  );
}

export default App;
