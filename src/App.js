import React from "react";
import UserContextProvider from "./Context";

import Screen from "./Screen";

function App() {
  return (
    <UserContextProvider>
      <Screen /> {/*Screen이 children이 된다. */}
      {/*Screen은 Provider로부터 어떤 data든지 가져올 수 있다는 것을 의미한다. */}
    </UserContextProvider>
  );
}

export default App;
