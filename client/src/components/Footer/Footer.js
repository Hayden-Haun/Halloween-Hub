import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <header className="footer has-background-dark is-flex is-justify-content-space-around is-align-items-center py-5">
      <h1 className="pl-5">
        {/* <Link to="/" className="is-size-1 has-text-light">
          <span role="img" aria-label="shopping bag"></span>
          HALLOWEEN STORE
        </Link> */}
        <a href="https://github.com/Hayden-Haun/Halloween-Hub" target="no_blank">
          <img src={`/images/github-icon.png`} alt="GitHub" />
        </a>
      </h1>
      <div>
        <ul className="has-text-white">
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
