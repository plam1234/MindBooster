import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import store from "./store";

import AuthenticatedApp from "./components/AuthenticatedApp/AuthenticatedApp";
import UnathenticatedApp from "./components/UnAuthenticatedApp/UnAuthenticatedApp";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

// Create Login route, Signup Route, Quiz Route(dash/home)
class App extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
    console.log("logging out");
  };

  render() {
    const { user } = this.props.auth;

    return user.id ? <AuthenticatedApp /> : <UnathenticatedApp />;
  }
}

App.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(App);
