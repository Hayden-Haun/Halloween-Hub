import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="buttons pr-5">
          <li className="mx-1" className="button is-light">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1" className="button is-light">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="buttons pr-5">
          <li className="mx-1">
            <Link to="/signup" className="button is-light">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login" className="button is-light">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="navbar is-dark is-flex is-justify-content-space-between is-align-items-center">
      <h1 className="pl-5">
        <Link to="/" className="is-size-1 has-text-light">
          <span role="img" aria-label="shopping bag"></span>
          HALLOWEEN STORE
        </Link>
      </h1>
      <div></div>
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
