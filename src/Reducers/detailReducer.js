import * as Types from "../Constants";
const initialState = [];

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.COURSE_DETAIL:
      return action.payload;
    default:
      return state;
  }
}