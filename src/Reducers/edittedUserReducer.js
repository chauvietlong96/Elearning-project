import * as Types from '../Constants';

const initialState = [];

export const edittedUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.EDIT_USER:
            return action.payload;
        default:
            return state;
    }
}