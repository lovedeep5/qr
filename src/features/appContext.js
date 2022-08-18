import { createContext, useContext, useReducer } from "react";

const appContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "popupDismis":
      return { ...state, data: { ...state.data, popup: false } };
    case "setURL":
      return {
        ...state,
        data: { ...state.data, popup: true, url: action.url },
      };
    default:
      return state;
  }
};
const initialState = { data: { popup: false, url: "" } };

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <appContext.Provider value={{ ...state, dispatch }}>
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(appContext);
};

export default AppContextProvider;
