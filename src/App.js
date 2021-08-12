import React, { useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
import reducer, { ADD, COMPLETE, DEL, initialState } from "./reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // payload를 통해 data도 전달해주어야 한다. 여기선 ToDo에 추가할 텍스트를 말한다.
    dispatch({ type: ADD, payload: newToDo });
    setNewToDo("");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewToDo(value);
  };

  return (
    <>
      <h1>Write To Do </h1>
      <form onSubmit={onSubmit}>
        {" "}
        // form을 입력하고 제출할 때마다 그 내용을 ToDo에 추가해준다.
        <input
          value={newToDo} // input의 value는 state에 묶이며 그래서 useState를 사용한다.
          type="text"
          placeholder="Write to do"
          onChange={onChange} // input에 글을 쓸때마다 onChange function이 실행된다.
        />
      </form>
      <ul>
        <h2>To Dos</h2>
        {state.toDos.map((toDo) => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            <span onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
              ❌
            </span>
            <span onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
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
                <span onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
                  ❌
                </span>
                <span
                  onClick={() => dispatch({ type: COMPLETE, payload: toDo.id })}
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
