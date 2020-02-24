import * as Types from "../Constants";
const initialState = [];

export const getCurrentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
}