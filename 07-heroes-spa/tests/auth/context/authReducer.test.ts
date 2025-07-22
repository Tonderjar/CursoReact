import { authReducer } from "../../../src/auth/context";
import { types } from "../../../src/auth/types/types";

describe("Pruebas en AuthReducer", () => {
  const initialState = {};
  test("debe de retornar el estado por defecto", () => {
    const newState = authReducer({ logged: false }, {});
    expect(newState).toEqual({ logged: false });
  });

  test("debe de llamar el login y establecer el user", () => {
    const user = { id: "ABC", name: "Diego Lezama" };
    const action = { type: types.login, payload: user };
    const newState = authReducer(initialState, action);

    expect(newState.logged).toBeTruthy();
    expect(newState.user).toBe(user);
  });

  test("debe de borrar el name del usuario y logged en false", () => {
    const user = { id: "ABC", name: "Diego Lezama" };
    const action = { type: types.login, payload: user };
    const newState = authReducer(initialState, action);
    const action2 = { type: types.logout };
    const newState2 = authReducer(newState, action2);

    expect(newState2.logged).toBeFalsy();
    expect(newState2.user).toBeFalsy();
  });
});
