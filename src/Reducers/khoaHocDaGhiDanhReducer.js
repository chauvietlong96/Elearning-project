import * as Types from '../Constants';

const initialState = [];

export const khoaHocDaGhiDanhReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.KHOA_HOC_DA_GHI_DANH:
            return action.payload;
        default:
            return state;
    }
}