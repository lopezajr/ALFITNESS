import React from "react";

/** Context: provides currentUser object and setter for it throughout app. */

const UserContext = React.createContext({
  currentUser: null, // Default value for currentUser
  setCurrentUser: () => {}, // Placeholder setter function
});

export default UserContext;
