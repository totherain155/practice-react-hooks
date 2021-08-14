import React, { useState } from "react";
import { ADD } from "./actions";
import { useDispatch } from "./context";

export default () => {
  const [newToDo, setNewToDo] = useState("");
  const dispatch = useDispatch();

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
    <form onSubmit={onSubmit}>
      {/* form을 입력하고 제출할 때마다 그 내용을 ToDo에 추가해준다.*/}
      <input
        value={newToDo} // input의 value는 state에 묶이며 그래서 useState를 사용한다.
        type="text"
        placeholder="Write to do"
        onChange={onChange} // input에 글을 쓸때마다 onChange function이 실행된다.
      />
    </form>
  );
};
