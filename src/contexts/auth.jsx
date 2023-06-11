import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [user, setUser] = useState({})
  const [name, setName] = useState({});
  const [lastName, setLastName] = useState({});
  const [token, setToken] = useState({});

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        name,
        setName,
        lastName,
        setLastName
      }}>
      {props.children}

    </AuthContext.Provider>
  );
}