import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../app/features/authentification/auth.actions";

const Header = () => {
  const loginStatus = useSelector((state) => state.login);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logout = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    // Should the 'Remember me' data be true, clear all on logout
    if (userData) {
      localStorage.removeItem("userData");
    }

    return dispatch(logoutUser());
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="/assets/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {loginStatus ? (
          <div className="main-nav-item-user">
            <Link className="main-nav-item" to="profile">
              <i className="fa fa-user-circle"></i>
              {userData.firstName}
            </Link>
            <Link className="main-nav-item" to="/" onClick={() => logout()}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </div>
        ) : (
          <Link className="main-nav-item" to="login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
