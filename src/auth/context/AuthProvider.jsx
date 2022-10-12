import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReduce } from "./authReducer";

const initialState = {
  logged: false,
};
const login = async (email, password) => {};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReduce, initialState);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
