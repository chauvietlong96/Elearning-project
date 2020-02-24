import * as Types from '../Constants';

const initialState = [];

export const chuaGhiDanhReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHUA_GHI_DANH:
            return action.payload;
        default:
            return state;
    }
}