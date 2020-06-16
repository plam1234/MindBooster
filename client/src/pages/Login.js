import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import "./login1.css";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";

class Login extends Component {
  // ES 6 allows us to overwrite old things to make into new
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to homepage
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/homepage");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/homepage"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  handleInputChange = (e) => {
    //console.log(event.target.name);
    //console.log(event.target.value);
    // name = field = key, value = actual input
    this.setState({ [e.target.id]: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    //console.log("i am submitting stuffs");
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
    console.log(userData);
  };

  render() {
    const { errors } = this.state;
    return (
      <Form className="login">
        <h1>Log in to. </h1>
        <img className="img" src={logo} alt="" />
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={this.handleInputChange}
            value={this.state.email}
            error={errors.email}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={this.handleInputChange}
            value={this.state.password}
            error={errors.email}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox"> </Form.Group>
        <Button onClick={this.handleFormSubmit} variant="primary" type="submit">
          Submit
        </Button>

        <hr />
        <Link to="/signup">
          <Button variant="primary" type="no account">
            Dont have an account?
          </Button>
        </Link>
      </Form>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
