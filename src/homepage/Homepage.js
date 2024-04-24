import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import UserContext from "../auth/UserContext";

/** Homepage of site.
 *
 * Shows welcome message or login/register buttons.
 *
 * Routed at /
 *
 * Routes -> Homepage
 */

function Homepage() {
  const { currentUser } = useContext(UserContext);
  console.debug("Homepage", "currentUser=", currentUser);

  return (
<div className="Homepage" style={{ color: 'white' }}>
  <div className="container text-center">
    <h1 className="mb-4 font-weight-bold">Fitness Buddy</h1>
    <p className="lead">All Exercises in one, convenient place.</p>
    {currentUser
      ? <h1>
          Welcome Back, {currentUser.firstName || currentUser.username}!
        </h1>
      : (
<p>
  <Link className="btn btn-danger font-weight-bold mr-3" to="/login">
    Log in
  </Link>{" "}
  <Link className="btn btn-danger font-weight-bold" to="/signup">
    Sign up
  </Link>
</p>

      )}
  </div>
</div>

  );
}

export default Homepage;