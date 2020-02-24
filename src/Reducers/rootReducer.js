import {combineReducers} from 'redux';
import { coursesReducer } from './coursesReducer';
import { detailReducer } from './detailReducer';
import { getMenuCourse } from './getMenuCourse';
import { getCurrentUserReducer } from './getCurrentUserReducer';
import { userReducer } from './userReducer';
import { edittedUserReducer } from './edittedUserReducer';
import { courseDetailReducer } from './courseDetailReducer';
import { chuaGhiDanhReducer } from './chuaGhiDanhReducer';
import { choXetDuyetReducer } from './choXetDuyetReducer';
import { daGhiDanhReducer } from './daGhiDanhReducer';
import { khoaHocChuaGhiDanhReducer } from './khoaHocChuaGhiDanhReducer';
import { khoaHocDaGhiDanhReducer } from './khoaHocDaGhiDanhReducer';
import { khoaHocChoXetDuyetReducer } from './khoaHocChoXetDuyetReducer';

const rootReducer = combineReducers({
    courses: coursesReducer,
    courseDetail : detailReducer,
    courseMenu : getMenuCourse,
    currentUser : getCurrentUserReducer,
    users: userReducer,
    edittedUser: edittedUserReducer,
    getCourseDetail : courseDetailReducer,
    chuaGhiDanhList: chuaGhiDanhReducer,
    choXetDuyetList: choXetDuyetReducer,
    daGhiDanhList: daGhiDanhReducer,
    khoaHocChuaGhiDanh: khoaHocChuaGhiDanhReducer,
    khoaHocDaGhiDanh: khoaHocDaGhiDanhReducer,
    khoaHocChoXetDuyet: khoaHocChoXetDuyetReducer,
})

export default rootReducer;