import api from "../API";
import * as Types from '../Constants';

export const addCourse = (course) => {
    // const user = JSON.parse(localStorage.getItem("currentUser"));
    // api.defaults.headers.common['Authorization'] = 'Bearer ' + user.accessToken;

    api.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia2hhaSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkdWIiwibmJmIjoxNTYwNTQ3MzUxLCJleHAiOjE1NjA1NTA5NTF9.bD1nzTHtVYg7avgF4kegdWhUWjh9kzJPkQEXcqwx4_Q';

    api
        .post('/QuanLyKhoaHoc/ThemKhoaHoc', course)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.response.data))
}

export const deleteCourse = (maKhoaHoc) => {
    // const user = JSON.parse(localStorage.getItem("currentUser"));
    // api.defaults.headers.common['Authorization'] = 'Bearer ' + user.accessToken;

    api.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia2hhaSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkdWIiwibmJmIjoxNTYwNTQ3MzUxLCJleHAiOjE1NjA1NTA5NTF9.bD1nzTHtVYg7avgF4kegdWhUWjh9kzJPkQEXcqwx4_Q';
    api
        .delete(`/QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.response.data))
}

export const updateCourse = (course) => {
    // const user = JSON.parse(localStorage.getItem("currentUser"));
    // api.defaults.headers.common['Authorization'] = 'Bearer ' + user.accessToken;

    api.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia2hhaSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkdWIiwibmJmIjoxNTYwNTQ3MzUxLCJleHAiOjE1NjA1NTA5NTF9.bD1nzTHtVYg7avgF4kegdWhUWjh9kzJPkQEXcqwx4_Q';
    api
        .put('/QuanLyKhoaHoc/CapNhatKhoaHoc', course)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.response.data))
}

export const getCourseDetail = (maKhoaHoc) => {
    api.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia2hhaSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkdWIiwibmJmIjoxNTYwNTQ3MzUxLCJleHAiOjE1NjA1NTA5NTF9.bD1nzTHtVYg7avgF4kegdWhUWjh9kzJPkQEXcqwx4_Q';
    return (dispatch) => {
        api
            .get(`/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
            .then(res => {
                dispatch({
                    type: Types.GET_COURSE_DETAIL,
                    payload: res.data
                })
            })
            .catch(err => console.log(err))
    }
}

export const searchCourse = (tenKhoaHoc) => {
    return (dispatch) => {
        api
        .get(`/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=GP01`)
        .then( res => dispatch({
            type: Types.SEARCH_COURSE,
            payload: res.data
        }))
        .catch(err => console.log(err.response.data))
    }
}