import React, { useReducer } from "react";

const INCREMENT = "increment";
const DECREMENT = "decrement";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error();
  } // return할 object는 state를 대체하게 될 object이다.
  // 이건 state를 변경하는 게 아니고 override 하는 것도 아니다 .
  // 추가하는 것도 아닌 state를 완전히 '대체'하는 것이다.
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // dispatch가 하는 일은 reducer에 action을 보내 주는 것이다.
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: INCREMENT })}>Add</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>Minus</button>
    </>
  );
};

export default App;
