import React from "react";

// USE STATE WITH REDUX TO CHANGE DISPLAY DEPENDING ON LOGIN STATUS
// USE STATE TO GET USER NAME
const Header = () => {
  // PLACERHOLDER VARIABLE
  let loginStatus = false;

  return (
    <nav class="main-nav">
      <a class="main-nav-logo" href="../../public/index.html">
        <img
          class="main-nav-logo-image"
          src="../assets/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </a>
      <div>
        {loginStatus ? (
          <a class="main-nav-item" href="./sign-in.html">
            <i class="fa fa-user-circle"></i>
            Sign In
          </a>
        ) : (
          <div>
            <a class="main-nav-item" href="./user.html">
              <i class="fa fa-user-circle"></i>
              Tony
            </a>
            <a class="main-nav-item" href="../../public/index.html">
              <i class="fa fa-sign-out"></i>
              Sign Out
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
