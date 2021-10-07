import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import "./style.css";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1 is-flex is-justify-content-center is-align-items-center is-flex-direction-column py-5">
      <Link to="/signup" className="is-size-4">
        ← Go to Signup
      </Link>

      <h2 className="is-size-2">Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="field">
          <label htmlFor="email" className="label">
            Email address:
          </label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="field">
          <label htmlFor="pwd" className="label">
            Password:
          </label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
            className="input"
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="field is-flex is-justify-content-center is-align-items-center">
          <button type="submit" className="button is-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
