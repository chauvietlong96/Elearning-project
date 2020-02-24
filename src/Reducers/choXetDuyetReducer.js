import * as Types from '../Constants';

const initialState = [];

export const choXetDuyetReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHO_XET_DUYET:
            return action.payload;
        default:
            return state;
    }
}