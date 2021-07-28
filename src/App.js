import React from "react";
import UserContextProvider from "./Context";

import Screen from "./Screen";

function App() {
  return (
    <UserContextProvider>
      <Screen /> {/*Screen이 children이 된다. */}
    </UserContextProvider>
  );
}

export default App;
