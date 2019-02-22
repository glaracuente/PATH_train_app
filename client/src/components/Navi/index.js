import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "./style.css";

var config = {
  //NEED TO PUT THIS INTO ENV FILE
  apiKey: "AIzaSyAMJPcPbgt8Nj2ZTedvYbEzg7-xyDsmA-I",
  authDomain: "path-project-cce68.firebaseapp.com",
  databaseURL: "https://path-project-cce68.firebaseio.com",
  projectId: "path-project-cce68",
  storageBucket: "path-project-cce68.appspot.com",
  messagingSenderId: "213689011154"
};

firebase.initializeApp(config);

class Navi extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    //signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

  render() {
    return (
      <>
        {" "}
        <Navbar expand="lg" bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="/">Catch Next Train</Nav.Link>
            <Nav.Link href="/schedule">Path Schedule</Nav.Link>
            <Nav.Link href="/mapfares">Map and Fare Info</Nav.Link>
            <Nav.Link href="/">Alerts</Nav.Link>
          </Nav>
          {this.state.isSignedIn ? (
            <span>
              <button
                className="signout"
                onClick={() => firebase.auth().signOut()}
              >
                Sign out!
              </button>
              <img
                className="profilepic"
                alt="profile picture"
                src={firebase.auth().currentUser.photoURL}
              />
            </span>
          ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
        </Navbar>
      </>
    );
  }
}

export default Navi;
