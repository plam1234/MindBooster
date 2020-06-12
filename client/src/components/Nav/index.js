import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Switch, Button } from "react-bootstrap";
import "./index.css";
import "../../../src/App";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";

class Navbar extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <Nav className="bar" activeKey="/home">
        <Nav.Item>
          <Link to="/login">
            <Button onClick={this.onLogoutClick}>Signout</Button>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/homepage"> Homepage </Link>
        </Nav.Item>

        {/* <Nav.Item>
                <Nav.Link eventKey="../../pages/homepage">Homepage</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="">Link</Nav.Link>
            </Nav.Item> */}
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
