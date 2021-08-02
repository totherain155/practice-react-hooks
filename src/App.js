import React from "react";
import Lang from "./Context";
import Screen from "./Screen";
import translations from "./translation";

const App = () => {
  return (
    <Lang defaultLang="en" translations={translations}>
      <Screen />
    </Lang>
  );
};

export default App;
