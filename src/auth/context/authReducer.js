import { types } from "../types/types";

export const authReduce = (state, action) => {
  switch (action.type) {
    case types.login:
      return state;
      break;
    case types.logout:
      return state;
    default:
      return state;
  }
};
