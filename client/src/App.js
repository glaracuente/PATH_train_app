import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NextTrain from "./pages/NextTrain";
import Schedule from "./pages/Schedule";
import NoMatch from "./pages/NoMatch";
import Navi from "./components/Navi";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div>
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <Navi />
              <Row>
                <Col xs={6} md={6}>
                  <Switch>
                    <Route exact path="/" component={NextTrain} />
                    <Route exact path="/schedule" component={Schedule} />
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
