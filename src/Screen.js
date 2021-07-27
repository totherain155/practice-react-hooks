import React, { useContext } from "react";
import Header from "./Header";
import { UserContext } from "./Context";

const Screen = ({ user }) => (
  <div>
    <Header user={user} />
    <h1>First screen</h1>
  </div>
);

export default Screen;
