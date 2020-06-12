import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import "./login1.css";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";

function Login() {
  // ES 6 allows us to overwrite old things to make into new
  const [formObject, setFormObject] = useState({});

  function componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/homepage"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  function handleInputChange(event) {
    //console.log(event.target.name);
    //console.log(event.target.value);
    // name = field = key, value = actual input
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("i am submitting stuffs");
    const userData = {
      email: formObject.email,
      password: formObject.password,
    };
    this.props.loginUser(userData);
  }

  return (
    <Form className="login">
      <h1>Log in to. </h1>
      <img className="img" src={logo} />
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          name="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          name="password"
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox"> </Form.Group>
      <Link to="/Homepage">
        <Button onClick={handleFormSubmit} variant="primary" type="submit">
          Submit
        </Button>
      </Link>

      <hr />
      <Link to="/signup">
        <Button variant="primary" type="no account">
          Dont have an account?
        </Button>
      </Link>
    </Form>
  );
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
