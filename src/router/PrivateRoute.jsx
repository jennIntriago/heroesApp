import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";

//High order component when send the children
export const PrivateRoute = ({ children }) => {
  // Saber un usuario esta autenticado con el useContext
  const { logged } = useContext(AuthContext);
  //   si el user esta autenticado entonces manda el children sino, mandalo a login
  return logged ? children : <Navigate to="/login" />;
};
