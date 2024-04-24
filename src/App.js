import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import { jwtDecode } from "jwt-decode"; 
import Routess from "./routes-nav/Routes";
import JoblyApi from "./api/api";
import useLocalStorage from "./hooks/useLocalStorage";
// import LoadingSpinner from "./common/LoadingSpinner"; // Removed space in import path
import LoadingSpinner from "./common /LoadingSpinner";
import Navigation from "./routes-nav/Navigation";
import Footer from './components/Footer';
import UserContext from "./auth/UserContext";
import './App.css';
import { ImportExport } from "@mui/icons-material";

export const TOKEN_STORAGE_ID = "jobly-token";

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  console.debug(
      "App",
      "infoLoaded=", infoLoaded,
      "currentUser=", currentUser,
      "token=", token,
  );

  useEffect(function loadUserInfo() {
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwtDecode(token); // Removed extra space
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setApplicationIds(new Set(currentUser.applications));
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }

    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  async function signup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  // if (!infoLoaded) return <LoadingSpinner/>;

  if (!infoLoaded) return <LoadingSpinner/>;

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}> {/* Added closing angle bracket after Provider */}
        <div className="App"> {/* Corrected class name */}
          <Navigation logout={logout} />
          <Routess login={login} signup={signup} />
        </div>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
