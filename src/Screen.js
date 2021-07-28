import React, { useContext } from "react";
import Header from "./Header";
import { UserContext } from "./Context";

const Screen = () => {
  const { logIn } = useContext(UserContext);
  return (
    <div>
      <Header />
      <h1>First Screen</h1>

      <button onClick={logIn}>LogIn</button>
    </div>
  );
};

export default Screen;
