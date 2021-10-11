import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import CategoryMenu from "../CategoryMenu";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div>
          <button className="button is-light ml-1 mb-1">
            <Link to="/orderHistory">Order History</Link>
          </button>
          <a className="button is-light ml-1 mb-1" href="/" onClick={() => Auth.logout()}>
            Logout
          </a>
        </div>
      );
    } else {
      return (
        <div>
          <button className="button is-light ml-1 mb-1">
            <Link to="/signup" className="button is-light">
              Signup
            </Link>
          </button>
          <button className="button is-light ml-1 mb-1">
            <Link to="/login" className="button is-light">
              Login
            </Link>
          </button>
        </div>
      );
    }
  }

  return (
    <header className="navbar is-dark columns is-vcentered my-0 py-1">
      <h1 className="column is-3 is-offset-1 has-text-centered">
        <Link to="/" className="is-size-1 has-text-light has-text-weight-bold">
          <span role="img" aria-label="shopping bag">
            <i class="fas fa-cat p-3 brand"></i>
          </span>
          HALLOWEEN HUB
        </Link>
      </h1>
      <div className="column is-3 is-offset-1 has-text-centered">
        <CategoryMenu />
      </div>
      <nav className="column is-3 is-offset-1 has-text-centered">{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
