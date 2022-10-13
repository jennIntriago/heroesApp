import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReduce } from "./authReducer";

// const initialState = {
//   logged: false,
// };

//podemos usar el funcion init=initialaze que permite el useReducer para iniciar su estado
const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    //Esta linea quiere decir: si el user existe entonces !!user es true
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReduce, {}, init);

  const login = (name = "") => {
    const user = { id: "ABC", name };
    const action = {
      type: types.login,
      payload: user,
    };
    localStorage.setItem("user", JSON.stringify(user));
    //en el dispatch mandamos la accion que queremos recibir
    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login: login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
