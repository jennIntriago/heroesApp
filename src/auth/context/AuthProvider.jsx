import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReduce } from "./authReducer";

const initialState = {
  logged: false,
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReduce, initialState);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
