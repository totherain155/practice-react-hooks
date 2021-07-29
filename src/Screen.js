import React, { useContext } from "react";
import Header from "./Header";
import { useFns, UserContext } from "./Context";

const Screen = () => {
  // useFns
  const { logUserIn } = useFns();
  return (
    <div>
      <Header />
      <h1>First screen</h1>
      <button onClick={logUserIn}>Log user in</button>
    </div>
  );
};

export default Screen;
