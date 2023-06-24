import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [user, setUser] = useState({})
  const [token, setToken] = useState({});

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken
      }}>
      {props.children}

    </AuthContext.Provider>
  );
}