import React, { useState, useContext } from "react";

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "K",
    loggedIn: false,
  });
  const logUserIn = () =>
    setUser({ ...user /*다른 모든 object를 의미한다.  */, loggedIn: true });
  return (
    <UserContext.Provider value={{ user, fn: { logUserIn } }}>
      {children}
    </UserContext.Provider> // Provider의 모든 children은 user에 대한 접근 권한이 생겼다.
  ); // Provider는 context를 모든 elements랑 공유할 수 있게 만들어 준다.
};

// useUser
export const useUser = () => {
  const { user } = useContext(UserContext);
  return user;
};

// useFns
export const useFns = () => {
  const { fn } = useContext(UserContext);
  return fn;
};

export default UserContextProvider;
