import React, { useState, useEffect } from "react";

import API from "../utils/API";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../components/Form";
import logo from "../logo.png";
import "./login1.css";

import { Form, Group, Lable, Button } from "react-bootstrap";

function Login() {
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
        <Form className="login">
            <h1>Log in to. </h1>
            <img className="img" src={logo} />
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    onChange={handleInputChange}
                    type="email"
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
                    type="password"
                    placeholder="Password"
                />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox"> </Form.Group>
            <Link to="/Homepage">
                <Button
                    onClick={handleFormSubmit}
                    variant="primary"
                    type="submit"
                >
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

export default Login;
