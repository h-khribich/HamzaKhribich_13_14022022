import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../app/features/authentification/auth.actions";

const Header = () => {
  let loginStatus = useSelector((state) => state.login === true);
  let logout = useDispatch(logoutUser());

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
            <Link className="main-nav-item" to="user">
              <i className="fa fa-user-circle"></i>
              Tony
            </Link>
            <Link className="main-nav-item" to="/" onClick={logout}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </div>
        ) : (
          <Link className="main-nav-item" to="sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
