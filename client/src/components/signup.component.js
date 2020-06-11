import React, { Component, useState } from "react";
import logo from "../logo.png";
import axios from "axios";

const SignUpLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    axios
      .post("/api/auth/register_login", userData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  };
};

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>
        <img className="img" src={logo} />
        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
      </form>
    );
  }
}
