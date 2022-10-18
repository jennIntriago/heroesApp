import { authReduce, types } from "../../../src/auth";

describe("Pruebas en el authReducer", () => {
  test("Debe de retornar el estado por defecto", () => {
    const state = authReduce({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });
  test("debe de (login) llamar el login autenticar y establecer el user", () => {
    // accion de login
    const action = {
      type: types.login,
      payload: {
        name: "Jenn",
        id: "123",
      },
    };
    const state = authReduce({ logged: false }, action);
    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });
  test("debe de (logout) borrar el name del usuario y logged en false", () => {
    //
    const state = {
      logged: true,
      user: { id: "123", name: "Jenn" },
    };

    const action = {
      type: types.logout,
    };
    const newState = authReduce(state, action);

    expect(newState).toEqual({ logged: false });
  });
});
