import React, { useContext } from "react";
import { UserContext } from "./Context";
import { useUser } from "./Context";

const Header = () => {
  //useUser()
  const { name, loggedIn } = useUser();

  return (
    <header>
      <a href="#">Home</a> Hi, {name}, you are{" "}
      {loggedIn ? "logged in " : "anonymous"}
    </header>
  );
};

export default Header;
