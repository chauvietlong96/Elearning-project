import api from '../API';
import * as Types from '../Constants';

export const notRegister = (maKhoaHoc) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    api.defaults.headers.common['Authorization'] = 'Bearer ' + user.accessToken;

    // api.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia2hhaSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkdWIiwibmJmIjoxNTYwNTQ3MzUxLCJleHAiOjE1NjA1NTA5NTF9.bD1nzTHtVYg7avgF4kegdWhUWjh9kzJPkQEXcqwx4_Q';

    return (dispatch) => {
        api
    .post('/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh', maKhoaHoc)
    .then( res => {
        dispatch({
            type: Types.CHUA_GHI_DANH,
            payload: res.data
        })
    })
    .catch(err => console.log(err.response.data))
    }
    
}

export const getDaGhiDanhKhoaHoc = (maKhoaHoc) => {

    const user = JSON.parse(localStorage.getItem("currentUser"));
    api.defaults.headers.common['Authorization'] = 'Bearer ' + user.accessToken;

    // api.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia2hhaSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkdWIiwibmJmIjoxNTYwNTQ3MzUxLCJleHAiOjE1NjA1NTA5NTF9.bD1nzTHtVYg7avgF4kegdWhUWjh9kzJPkQEXcqwx4_Q';

    return (dispatch) => {
        api
        .post('/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc', maKhoaHoc)
        .then( res => {
            dispatch({
                type: Types.DA_GHI_DANH,
                payload: res.data
            })
        })
        .catch(err => console.log(err.response.data))
    }
}

export const getChoXetDuyet = (maKhoaHoc) => {

    const user = JSON.parse(localStorage.getItem("currentUser"));
    api.defaults.headers.common['Authorization'] = 'Bearer ' + user.accessToken;

    // api.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia2hhaSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkdWIiwibmJmIjoxNTYwNTQ3MzUxLCJleHAiOjE1NjA1NTA5NTF9.bD1nzTHtVYg7avgF4kegdWhUWjh9kzJPkQEXcqwx4_Q';

    return (dispatch) => {
        api
        .post('/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet', maKhoaHoc)
        .then( res => {
            dispatch({
                type: Types.CHO_XET_DUYET,
                payload: res.data
            })
        })
        .catch(err => console.log(err.response.data))
    }
}

export const xacThucGhiDanh = (data) => {

    const user = JSON.parse(localStorage.getItem("currentUser"));
    api.defaults.headers.common['Authorization'] = 'Bearer ' + user.accessToken;

    // api.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia2hhaSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkdWIiwibmJmIjoxNTYwNTQ3MzUxLCJleHAiOjE1NjA1NTA5NTF9.bD1nzTHtVYg7avgF4kegdWhUWjh9kzJPkQEXcqwx4_Q';

    api
    .post('/QuanLyKhoaHoc/GhiDanhKhoaHoc', data)
    .then( res => console.log(res.data))
    .catch( err => err.response.data)
}

export const khoaHocChuaGhiDanh = (maKhoaHoc) => {

    const user = JSON.parse(localStorage.getItem("currentUser"));
    api.defaults.headers.common['Authorization'] = 'Bearer ' + user.accessToken;

    // api.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia2hhaSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkdWIiwibmJmIjoxNTYwNTQ3MzUxLCJleHAiOjE1NjA1NTA5NTF9.bD1nzTHtVYg7avgF4kegdWhUWjh9kzJPkQEXcqwx4_Q';

    return (dispatch) => {
        api
    .post('/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh', maKhoaHoc)
    .then(res => {
        dispatch({
            type: Types.KHOA_HOC_CHUA_GHI_DANH,
            payload: res.data
        })
    })
    .catch(err => console.log(err.response.data))
    }
    
}

export const khoaHocDaGhiDanh = (maKhoaHoc) => {

    const user = JSON.parse(localStorage.getItem("currentUser"));
    api.defaults.headers.common['Authorization'] = 'Bearer ' + user.accessToken;


    // api.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia2hhaSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkdWIiwibmJmIjoxNTYwNTQ3MzUxLCJleHAiOjE1NjA1NTA5NTF9.bD1nzTHtVYg7avgF4kegdWhUWjh9kzJPkQEXcqwx4_Q';

    return (dispatch) => {
        api
    .post('/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet', maKhoaHoc)
    .then(res => {
        dispatch({
            type: Types.KHOA_HOC_DA_GHI_DANH,
            payload: res.data
        })
    })
    .catch(err => console.log(err.response.data))
    }
    
}

export const khoaHocChoXetDuyet = (maKhoaHoc) => {


    const user = JSON.parse(localStorage.getItem("currentUser"));
    api.defaults.headers.common['Authorization'] = 'Bearer ' + user.accessToken;

    // api.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia2hhaSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkdWIiwibmJmIjoxNTYwNTQ3MzUxLCJleHAiOjE1NjA1NTA5NTF9.bD1nzTHtVYg7avgF4kegdWhUWjh9kzJPkQEXcqwx4_Q';

    return (dispatch) => {
        api
    .post('/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet', maKhoaHoc)
    .then(res => {
        dispatch({
            type: Types.KHOA_HOC_CHO_XET_DUYET,
            payload: res.data
        })
    })
    .catch(err => console.log(err.response.data))
    }
    
}