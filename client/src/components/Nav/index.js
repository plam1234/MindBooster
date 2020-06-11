import React from "react";
import { Link, Router } from "react-router-dom";
import { Nav, Switch } from "react-bootstrap";
import "./index.css";

function Navbar() {
  return (
    <Nav
      className="navbar"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Start">Start</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
