import React, { useState } from "react";
import { checkLogin } from "../app/apiCalls";
import { useDispatch } from "react-redux";
import { loginUser } from "../app/features/authentification/auth.actions";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    if (email && password) {
      const userData = {
        email,
        password,
      };

      const status = await checkLogin(userData);

      if (status === 200) {
        dispatch(loginUser());
      }

      navigate("/user");
    } else {
      // ALERT BOX TO FILL FIELDS
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
              required
              type="text"
              id="username"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              required
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
