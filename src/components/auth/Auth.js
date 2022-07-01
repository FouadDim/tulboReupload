import React, { useEffect, useState } from "react";
import app from "./base.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <><div style={{width:"100%", height: "100vh", dispay: "flex", alignItems: "center", justifyContent: "center"}}><img width={"200px"} src="https://c.tenor.com/_tt3TLfzyYoAAAAC/s4gu-loding.gif" alt="" /><p>Loading authentication servers...</p></div></>;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
