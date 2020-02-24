import * as Types from "../Constants";
const initialState = [];

export const getMenuCourse = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_MENU:
      return action.payload;
    default:
      return state;
  }
}