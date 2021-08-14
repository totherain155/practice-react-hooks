import React from "react";
import Add from "./Add";

const App = () => {
  return (
    <>
      <Add />
      <ul>
        <h2>To Dos</h2>
        {state.toDos.map((toDo) => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            {/*클릭을 했을 때 payload에 id가 부여된다. 그 항목을 제거하라면 filter function을 통해 
             이 아이디와 같지않은 요소들만 반환하면 된다.*/}
            <span onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
              ❌
            </span>{" "}
            <span
              onClick={() => dispatch({ type: COMPLETE, payload: toDo.id })}
            >
              ✅
            </span>
          </li>
        ))}
      </ul>
      <ul>
        {state.completed.length !== 0 && (
          <>
            <h2>Completed</h2>
            {state.completed.map((toDo) => (
              <li key={toDo.id}>
                <span>{toDo.text}</span>
                <span
                  role="img"
                  aria-label=""
                  onClick={() => dispatch({ type: DEL, payload: toDo.id })}
                >
                  ❌
                </span>
                <span
                  role="img"
                  aria-label="rallback to completed"
                  onClick={() =>
                    dispatch({ type: UNCOMPLETE, payload: toDo.id })
                  }
                >
                  🙅‍♀️
                </span>
              </li>
            ))}
          </>
        )}
      </ul>
    </>
  );
};

export default App;
