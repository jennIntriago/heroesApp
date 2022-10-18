import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";

describe("Pruebas en <PublicRoute />", () => {
  test("Si no esta autenticado debe de mostrar el children", () => {
    const contextValue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>RUTA PUBLICA</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText("RUTA PUBLICA")).toBeTruthy();
  });

  test("Debe de navegar si esta autenticado ", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Strider",
        id: "asd",
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>RUTA PUBLICA</h1>
                </PublicRoute>
              }
            />

            <Route path="marvel" element={<h1>Pagina Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Pagina Marvel")).toBeTruthy();
  });
});
