import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../logo.png";
import "./login1.css";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";

class Signup extends Component {
  // ES 6 allows us to overwrite old things to make into new
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/homepage");
    }
  }

  componentWillReceiveProps(nextProps) {
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
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    this.props.registerUser(newUser, this.props.history);
    console.log("Account Created", newUser);
  };
  render() {
    const { errors } = this.state;
    return (
      <Form className="signup">
        <h1>Sign Up for</h1>
        <img className="img" src={logo} alt="" />
        <Form.Group controlId="name">
          <Form.Label>User Name </Form.Label>
          <Form.Control
            value={this.state.name}
            onChange={this.handleInputChange}
            error={errors.name}
            type="text"
            placeholder="User Name"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={this.handleInputChange}
            value={this.state.email}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>

          <Form.Control
            onChange={this.handleInputChange}
            value={this.state.password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox"> </Form.Group>

        <Button noValidate onClick={this.handleFormSubmit} variant="primary">
          Submit
        </Button>
        <hr />

        <Link to="/login">
          <Button variant="primary" type="no account">
            Have an account login
          </Button>
        </Link>
      </Form>
    );
  }
}
//mapStateToProps allows us to get our state from Redux and map it to props which we can use inside components.
Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Signup));
