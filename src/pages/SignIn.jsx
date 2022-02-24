import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { checkUser } from "../app/actionCreators";
import { apiCall } from "../app/apiCall";

const SignIn = () => {
  const [email, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    if (email && password) {
      const userData = {
        email,
        password,
      };

      console.log(JSON.stringify(userData));
      dispatch(checkUser(userData));
      apiCall(userData);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={(e) => handleForm(e)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
