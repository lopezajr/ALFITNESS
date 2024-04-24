import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./Navigation.css";

import Logo from '../assets/images/Logo.png';

function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext);
  console.debug("Navigation", "currentUser=", currentUser);

  const loggedInNav = () => (
    <ul className="navbar-nav ml-auto" style={{ opacity: 0.8 }}>
      <li className="nav-item">
        <NavLink className="nav-link" to="/home">
          Exercises
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/mission">
          Our Mission
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/profile">
          Profile
        </NavLink>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/" onClick={logout}>
          Log out {currentUser.first_name || currentUser.username}
        </Link>
      </li>
    </ul>
  );

  const loggedOutNav = () => (
    <ul className="navbar-nav ml-auto" style={{ opacity: 0.8 }}>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">
          Sign Up
        </NavLink>
      </li>
    </ul>
  );

  return (
    <nav className="Navigation navbar navbar-expand-md" style={{ opacity: 0.8 }}>
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px', borderRadius: '10%' }} />
            AL FITNESS
          </Link>
        </div>
        <div className="navbar-collapse justify-content-end">
          {currentUser ? loggedInNav() : loggedOutNav()}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
