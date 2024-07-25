import React from "react";
import "./style.css";

const NavBar = () => {
  return (
    <nav className="navbar primary-bg">
      <div className="container">
        <a className="navbar-brand text-white" href="/">
          <i className="fa-solid fa-utensils"></i> My Recipes
        </a>
        <div className="navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/manage-recipes">
                Manage Recipes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
