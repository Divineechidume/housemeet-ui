import React, { Component } from "react";
import { Helmet } from "react-helmet";
import logo from "../images/housemeet-logo.svg";
import LoginForm from "../components/LoginForm";
import "bootstrap/dist/css/bootstrap.css";
import "typeface-montserrat";

class LoginPage extends Component {
  styles = {
    fontSize: 30,
    fontWeight: "regular",
    fontFamily: "montserrat",
    textAlign: "center",
    paddingTop: 25,
  };

  render() {
    return (
      <div className="Login">
        <Helmet>
          <title>housemeet</title>
        </Helmet>
        <header className="Login-header">
          <DisplayLogo />
        </header>
        <body>
          <div class="text-center text-secondary" style={this.styles}>
            Log into your account
          </div>
          <Login />
        </body>
      </div>
    );
  }
}

function DisplayLogo() {
  return (
    <img
      src={logo}
      className="Login-logo"
      alt="logo"
      class="rounded mx-auto d-block"
      style={{ paddingTop: 50 }}
    />
  );
}

function Login() {
  return (
    <div className="LoginContainer">
      <div className="loginInner">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
