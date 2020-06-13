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
    return (
      <Nav className="bar" activeKey="">
        <Link to="/login">
          <Button onClick={this.onLogoutClick}>Sign out</Button>
        </Link>
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
