import * as Types from '../Constants';

const initialState = [];

export const courseDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_COURSE_DETAIL:
            return action.payload;
        default:
            return state;
    }
}