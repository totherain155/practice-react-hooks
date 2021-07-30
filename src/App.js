import React from "react";
import Lang from "./Context";
import translations from "./translation";
import Screen from "./Screen";

function App() {
  return (
    <Lang defaultLang="en" translations={translations}>
      <Screen /> {/*Screen이 children이 된다. */}
    </Lang>
  );
}

export default App;
