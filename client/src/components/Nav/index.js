import React from "react";
import { Link } from "react-router-dom";
import { Nav, Switch } from "react-bootstrap";
import "./index.css";
import "../../../src/App";

function Navbar() {
    return (
        <Nav
            className="bar"
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link href="/">Home </Nav.Link>
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

export default Navbar;
