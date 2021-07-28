import React, { useContext } from "react";
import { UserContext } from "./Context";

const Header = () => {
  const {
    user: { name, isLogIn },
  } = useContext(UserContext);

  return (
    <header>
      <a href="#"> Home </a> Hi, {name} you are{" "}
      {isLogIn ? "here now!" : "stranger"}
    </header>
  );
};

export default Header;
