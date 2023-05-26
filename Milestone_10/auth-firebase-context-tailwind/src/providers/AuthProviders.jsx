import React, { createContext, useContext } from "react";

export const UserContext = createContext(null);

const AuthProviders = ({ children }) => {
  const user = { displayName: "Fattah Samit" };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default AuthProviders;
