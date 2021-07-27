import React from "react";

const Header = ({ user }) => (
  <header>
    <a href="#">Home</a> Hi, {user.name}!
  </header>
);

export default Header;
