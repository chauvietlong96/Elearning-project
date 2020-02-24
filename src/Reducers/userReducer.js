import * as Types from '../Constants';

const initialState = []

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_USERS_LIST:
            return action.payload;
        case Types.SEARCH_USER:
            return action.payload;
        default:
            return state
    } 
}