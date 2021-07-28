import React, { useState } from "react";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    user: "K",
    isLogIn: false,
  });
  const logIn = () => setUser({ ...user, isLogIn: true });
  return (
    <UserContext.Provider value={{ user, logIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
