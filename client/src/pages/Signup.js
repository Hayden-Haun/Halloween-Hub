import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
      <Link to="/login" className="is-size-4">
        ← Go to Login
      </Link>

      <h2 className="is-size-2">Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="field">
          <label htmlFor="firstName" className="label">
            First Name:
          </label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="field">
          <label htmlFor="lastName" className="label">
            Last Name:
          </label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="field">
          <label htmlFor="email" className="label">
            Email:
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
        <div className="field is-flex is-justify-content-center is-align-items-center">
          <button className="button is-success" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
