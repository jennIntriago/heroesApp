import { authReduce } from "../../../src/auth/context/authReducer";

describe("Pruebas en el authReducer", () => {
  test("Debe de retornar el estado por defecto", () => {
    const state = authReduce({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });
  test("debe de (login) llamar el login autenticar y establecer el user", () => {
    // second;
  });
  test("debe de (logout) borrar el name del usuario y logged en false", () => {
    // second;
  });
});
