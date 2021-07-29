import React from "react";
import Header from "./Header";
import { useFns } from "./Context";

const Screen = () => {
  const { logIn } = useFns();
  return (
    <div>
      <Header />
      <h1>First Screen</h1>

      <button onClick={logIn}>LogIn</button>
    </div>
  );
};

export default Screen;
