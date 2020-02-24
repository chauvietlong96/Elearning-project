import * as Types from '../Constants';

const initialState = [];

export const khoaHocChuaGhiDanhReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.KHOA_HOC_CHUA_GHI_DANH:
            return action.payload;
        default:
            return state;
    }
}