import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
import "./index.css";
import "../../../src/App";
import { logoutUser } from "../../actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Navbar extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    console.log(user);

    const loginLogoutButton = user.id ? (
      <Link to="/signout">
        <Button onClick={this.onLogoutClick}>Log out</Button>
      </Link>
    ) : (
      <Link to="/">
        <Button onClick={this.onLogoutClick}>Sign In</Button>
      </Link>
    );
    return (
      <Nav className="bar" activeKey="">
        {loginLogoutButton}
      </Nav>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
