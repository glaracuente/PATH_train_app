import React, { Component } from "react";
import * as firebase from "firebase";
import { loginWithGoogle } from "../helpers/auth";

let config = {
  apiKey: "AIzaSyAMJPcPbgt8Nj2ZTedvYbEzg7-xyDsmA-I",
  authDomain: "path-project-cce68.firebaseapp.com",
  databaseURL: "https://path-project-cce68.firebaseio.com",
  projectId: "path-project-cce68",
  storageBucket: "path-project-cce68.appspot.com",
  messagingSenderId: "213689011154"
};

firebase.initializeApp(config);

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splashScreen: false
    };

    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
  }

  loginWithGoogle() {
    return firebaseAuth().signInWithRedirect(googleProvider);
  }

  authenticate(promise) {
    return promise
      .then(function(result) {
        // login with your app with result object to get accessToken (token)
        // localStorage.save(token);
        var token = result.credential.accessToken;
        var user = result.user;
        console.log("login happened with firebase, ", JSON.stringify(user));
        localStorage.setItem("firebaseUser", JSON.stringify(result));
        return Promise.resolve(result);
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        alert("failed firebase login" + error);
        return Promise.reject("err");
      });
  }

  loginWithFirebase(provider) {
    return firebaseAuth().signInWithRedirect(provider);
  }

  logout() {
    return firebaseAuth().signOut();
  }

  handleGoogleLogin() {
    loginWithGoogle().catch(function(error) {
      alert(error);
      localStorage.removeItem(firebaseAuthKey);
    });
    localStorage.setItem(firebaseAuthKey, "1");
  }

  componentWillMount() {
    if (localStorage.getItem(appTokenKey)) {
      this.props.history.push("/app/home");
      return;
    }

    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        console.log("User signed in: ", JSON.stringify(user));
        localStorage.removeItem(firebaseAuthKey);
        localStorage.setItem(appTokenKey, user.uid);
        this.props.history.push("/app/home");
      }
    });
  }

  render() {
    console.log(firebaseAuthKey + "=" + localStorage.getItem(firebaseAuthKey));
    if (localStorage.getItem(firebaseAuthKey) === "1") return <SplashScreen />;
    return <LoginPage handleGoogleLogin={this.handleGoogleLogin} />;
  }
}

const iconStyles = {
  color: "#ffffff"
};
const LoginPage = ({ handleGoogleLogin }) => (
  <div>
    <h1>Login</h1>
    <div>
      <RaisedButton
        label="Sign in with Google"
        labelColor={"#ffffff"}
        backgroundColor="#dd4b39"
        icon={<FontIcon className="fa fa-google-plus" style={iconStyles} />}
        onClick={handleGoogleLogin}
      />
    </div>
  </div>
);
const SplashScreen = () => <p>Loading...</p>;
