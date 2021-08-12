import { v4 as uuid } from "uuid";

export const initialState = {
  toDos: [],
  completed: [],
};
export const ADD = "add";
export const DEL = "del";
export const COMPLETE = "complete";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuid() }],
      };
    case DEL:
      return {
        ...state, //항상 이전의 state를 return해줘야 한다.
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
      };
    case COMPLETE:
      // toDo.id === action.payload를 만족하는 첫 번째 element를 찾아낸다.
      const target = state.toDos.find((toDo) => toDo.id == action.payload);

      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
        completed: [...state.completed, { ...target }],
      };
    default:
      return;
  }
};

export default reducer;
