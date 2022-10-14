import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  //usamos nuestro context
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const onLogin = () => {
    //consultamos si hubo una ruta anterior al hacer logout
    //si el lastPath es nulo lo lleva al /
    const lastPath = localStorage.getItem("lastPath") || "/";
    login("Jennifer Intriago");
    navigate(lastPath, {
      replace: true,
    });
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
