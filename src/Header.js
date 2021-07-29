import React from "react";
import { useUser } from "./Context";

const Header = () => {
  const { name, isLogIn } = useUser();
  return (
    <header>
      <a href="#"> Home </a> Hi, {name} you are{" "}
      {isLogIn ? "here now!" : "stranger"}
    </header>
  );
};

export default Header;
