import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe("Pruebas en el <PrivateRoute />", () => {
  test("Debe de mostrar el children si esta autenticado", () => {
    Storage.prototype.setItem = jest.fn();
    const contextValue = {
      logged: true,
      user: {
        id: "abc",
        name: "Jennifer",
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/search?q=batman"]}>
          <PrivateRoute>
            <h1>RUTA PRIVADA</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("RUTA PRIVADA")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "lastPath",
      "/search?q=batman"
    );
  });
});
