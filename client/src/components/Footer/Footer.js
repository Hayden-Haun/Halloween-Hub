import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <header className="navbar is-dark is-flex is-justify-content-space-around is-align-items-center py-5">
      <h1 className="pl-5">
        {/* <Link to="/" className="is-size-1 has-text-light">
          <span role="img" aria-label="shopping bag"></span>
          HALLOWEEN STORE
        </Link> */}
        <a href="https://github.com/Hayden-Haun/Project-3/" target="no_blank">
          <img src={`/images/github-icon.png`} alt="GitHub" />
        </a>
      </h1>
      <div>
        <ul>
          <li>Hayden Haun</li>
          <li>Matt Bush</li>
          <li>Nicholas Wojtalewicz</li>
          <li>Abby Castelow</li>
        </ul>
      </div>
    </header>
  );
}

export default Footer;
