import * as Types from '../Constants';

const initialState = [];

export const khoaHocChoXetDuyetReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.KHOA_HOC_CHO_XET_DUYET:
            return action.payload;
        default:
            return state;
    }
}