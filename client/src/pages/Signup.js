import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import logo from "../logo.png";
import "./login1.css";
import { Form, Group, Lable, Button } from "react-bootstrap";

function Signup() {
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  function deleteBook(id) {
    API.deleteBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis,
      })
        .then((res) => loadBooks())
        .catch((err) => console.log(err));
    }
  }

  return (
    <Form className="signup">
      <h1>Sign Up for Hello </h1>
      <img className="img" src={logo} />
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Full name </Form.Label>
        <Form.Control type="email" placeholder="Full name" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Conferm password</Form.Label>
        <Form.Control type="password" placeholder="Conferm password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox"> </Form.Group>
      <Button variant="primary" type="submit">
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
