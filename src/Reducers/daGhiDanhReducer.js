import * as Types from '../Constants';

const initialState = [];

export const daGhiDanhReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.DA_GHI_DANH:
            return action.payload;
        default:
            return state;
    }
}