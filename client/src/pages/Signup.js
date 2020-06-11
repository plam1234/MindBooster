import React, { useState, setEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../components/Form";
import logo from "../logo.png";
import "./login1.css";
import { Form, Group, Label, Button } from "react-bootstrap";

function Signup() {
  const [users, setUsers] = useState([]);
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.fullname && formObject.email && formObject.password) {
      API.saveUser({
        name: formObject.name,
        email: formObject.email,
        password: formObject.password,
      })
        .then((res) => setUsers())
        .catch((err) => console.log(err));
    }
  }

  return (
    <Form className="signup">
      <h1>Sign Up for</h1>
      <img className="img" src={logo} />
      <Form.Group controlId="formBasicEmail">
        <Form.Label>User Name </Form.Label>
        <Form.Control
          onChange={handleInputChange}
          type="name"
          placeholder="User Name"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox"> </Form.Group>
      <Button
        disabled={!(formObject.name && formObject.email && formObject.password)}
        onClick={handleFormSubmit}
        variant="primary"
      >
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

export default Signup;
