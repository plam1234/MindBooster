import React, { Component } from "react";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import logo from "../logo.png";
import "./login1.css";
import { Button, Card, Title, Text } from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <div>
                <img src={logo} />
                <h1>Hello Home page</h1>
            </div>
        );
    }
}
export default Home;
