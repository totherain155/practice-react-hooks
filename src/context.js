import React, { creatContext, useReducer, useContext } from "react";

const ToDosContext = createContext();

const ToDosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ToDosContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDosContext.Provider>
  );
};

export const useDispatch = () => {
  const { dispatch } = useContext(ToDosContext);
  return dispatch;
};

export default ToDosProvider;
