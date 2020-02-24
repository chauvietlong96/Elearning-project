import * as Types from "../Constants";
const initialState = [];

export const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_COURSES:
      return action.payload;
    case Types.SEARCH_COURSE:
      return action.payload;
    default:
      return state;
  }
}
