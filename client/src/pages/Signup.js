import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../logo.png";
import "./login1.css";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";

function Signup() {
  // ES 6 allows us to overwrite old things to make into new
  const [formObject, setFormObject] = useState({});

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
    const newUser = {
      name: formObject.name,
      email: formObject.email,
      password: formObject.password,
    };
    console.log(newUser);

    this.props.registerUser(newUser, this.props.history);
  }

  return (
    <Form className="signup">
      <h1>Sign Up for</h1>
      <img className="img" src={logo} />
      <Form.Group controlId="formBasicEmail">
        <Form.Label>User Name </Form.Label>

        <Form.Control
          onChange={handleInputChange}
          name="name"
          placeholder="User Name"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          name="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>

        <Form.Control
          onChange={handleInputChange}
          type="password"
          name="password"
          placeholder="Password"
        />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox"> </Form.Group>
      <Button onClick={handleFormSubmit} variant="primary">
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
