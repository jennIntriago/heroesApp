import { types } from "../../../src/auth";

describe('Pruebas en el "Types.js"', () => {
  test("Debe de regresar estos types", () => {
    // second
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
