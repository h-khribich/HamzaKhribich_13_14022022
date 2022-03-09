import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../app/features/authentification/auth.actions";

const Login = () => {
  const [email, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");
  const [invalidMsg, setInvalidMsg] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = useSelector((state) => state.login);
  const error = useSelector((state) => state.error);

  const handleChange = (e) => {
    // Updating relevant state depending on input id
    switch (e.target.id) {
      case "username":
        setUserEmail(e.target.value);
        break;
      case "password":
        setUserPassword(e.target.value);
        break;
      default:
        return;
    }
    // If fields are empty, no need for invalid message
    if (!email || !password) {
      setInvalidMsg(false);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();

    // Both user inputs in one object to be used as arg in dispatch
    const userData = {
      email,
      password,
    };

    // Remember user feature with localStorage
    if (rememberMe) {
      localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userData");
    }

    dispatch(loginUser(userData));
  };

  // Redirect user depending on login status
  useEffect(() => {
    if (login === true) {
      navigate("/profile");
    } else {
      setInvalidMsg(error);
    }
  }, [login, error, navigate]);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={(e) => handleForm(e)}>
          {invalidMsg ? (
            <span data-micron="shake" className="form__invalid-message">
              {invalidMsg}
            </span>
          ) : (
            <span data-micron="shake" className="form__invalid-message hidden">
              placeholder
            </span>
          )}
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              required
              type="text"
              id="username"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              required
              type="password"
              id="password"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              onClick={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default Login;
