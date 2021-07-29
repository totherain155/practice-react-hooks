import React, { useState, useContext } from "react";

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    user: "K",
    isLogIn: false,
  });
  const logIn = () => setUser({ ...user, isLogIn: true });
  return (
    <UserContext.Provider value={{ user, fn: { logIn } }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { user } = useContext(UserContext);
  return user;
};

export const useFns = () => {
  const { fn } = useContext(UserContext);
  return fn;
};

export default UserContextProvider;
