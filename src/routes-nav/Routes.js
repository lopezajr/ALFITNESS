import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../profiles/ProfileForm";
import SignupForm from "../auth/SignUpForm";
import PrivateRoute from "./PrivateRoute";
import ExerciseDetail from "../pages/ExerciseDetail";
import Example from "../components/Example";
import Home from '../pages/Home';


/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function Routess({ login, signup }) {
  console.debug(
      "Routes",
      `login=${typeof login}`,
      `register=${typeof register}`,
  );

  return (
    <div className="pt-5">
      <Switch>

        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/mission">
          <Example/>
        </Route>
        
    
        <Route exact path="/login">
          <LoginForm login={login} />
        </Route> 

        <Route exact path="/signup">
         <SignupForm signup={signup} />
        </Route> 

        <Route exact path="/exercise/:id">
          <ExerciseDetail />
        </Route> 
     
        <PrivateRoute path="/profile">
          <ProfileForm />
        </PrivateRoute> <ProfileForm />
        
          <Redirect to="/" />
         
         </Switch>
         

    </div>
  );
  
}

export default Routess;
