import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand bg-light rounded-3" href="#">
          <img src="logo.png" alt="logo" width="50" height="50" />
        </a>
      </div>
    </nav>
  );
};

export default Header;
