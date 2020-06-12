import React, { Component } from "react";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import quiz1 from "../quiz1.png";
import { Link } from "react-router-dom"
import logo from "../logo.png";
import Quiz from "./Quiz"
import "./login1.css";
import { Card, Img, Col, Title, Button } from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <div className="tainer">
                <h1>Hello</h1>
                <img src={logo} />
                <Card style={{ width: "90%", justifyContent: "center" }}>
                    <Card.Img className="imagge" variant="top" src={quiz1} />
                    <Card.Body>
                        <Card.Title>Quiz game</Card.Title>
                        <Card.Text>
                            Today we will pass a small test, please click on the
                            button in order to start our test
                        </Card.Text>
                        <Link to="/quiz"><Button variant="primary">Let's star quiz</Button> </Link>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
export default Home;
