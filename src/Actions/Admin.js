import api from '../API';
import * as Types from '../Constants';


export const addUsers = (dataUser, callback) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    api.defaults.headers.common['Authorization'] = 'Bearer ' + user.accessToken;

    // api.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia2hhaSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkdWIiwibmJmIjoxNTYwNTQ3MzUxLCJleHAiOjE1NjA1NTA5NTF9.bD1nzTHtVYg7avgF4kegdWhUWjh9kzJPkQEXcqwx4_Q';
    api
        .post('/QuanLyNguoiDung/ThemNguoiDung', dataUser)
        .then(res => {
            callback(res.data)
        })
        .catch(err => console.log(err.response.data)
        )
};

export const getUsers = () => {
    return(dispatch) => {
        api
        .get('/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03')
        .then(res => {
            dispatch({
                type: Types.GET_USERS_LIST,
                payload: res.data
            })
        })
        .catch( err => console.log(err.response.data))
    }
}

export const deleteUser = (taiKhoan) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    api.defaults.headers.common['Authorization'] = 'Bearer ' + user.accessToken;

    // api.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia2hhaSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkdWIiwibmJmIjoxNTYwNTQ3MzUxLCJleHAiOjE1NjA1NTA5NTF9.bD1nzTHtVYg7avgF4kegdWhUWjh9kzJPkQEXcqwx4_Q';
    api
    .delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response.data))
};

export const getUserDetail = (TaiKhoan, dispactch) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    api.defaults.headers.common['Authorization'] = 'Bearer ' + user.accessToken;

    // api.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia2hhaSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkdWIiwibmJmIjoxNTYwNTQ3MzUxLCJleHAiOjE1NjA1NTA5NTF9.bD1nzTHtVYg7avgF4kegdWhUWjh9kzJPkQEXcqwx4_Q';
    return (dispatch) => {
        api
    .post('/QuanLyNguoiDung/ThongTinTaiKhoan', {taiKhoan: TaiKhoan})
    .then(res => dispatch({
        type: Types.EDIT_USER,
        payload: res.data,
    }))
    .catch(err => console.log(err.response.data))
    }
}

export const updateUser = (dataUser, callback) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    api.defaults.headers.common['Authorization'] = 'Bearer ' + user.accessToken;

    // api.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia2hhaSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkdWIiwibmJmIjoxNTYwNTQ3MzUxLCJleHAiOjE1NjA1NTA5NTF9.bD1nzTHtVYg7avgF4kegdWhUWjh9kzJPkQEXcqwx4_Q';
    
    api
    .put('/QuanLyNguoiDung/CapNhatThongTinNguoiDung', dataUser)
    .then( res => console.log(res.data))
    .catch( err => console.log(err.response.data))
}


export const searchUser = (keyWord) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    api.defaults.headers.common['Authorization'] = 'Bearer ' + user.accessToken;

    // api.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia2hhaSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkdWIiwibmJmIjoxNTYwNTQ3MzUxLCJleHAiOjE1NjA1NTA5NTF9.bD1nzTHtVYg7avgF4kegdWhUWjh9kzJPkQEXcqwx4_Q';
    return(dispatch) => {
        api
        .get(`/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP03&tuKhoa=${keyWord}`)
        .then(res => {
            dispatch({
                type: Types.SEARCH_USER,
                payload: res.data
            })
        })
        .catch( err => console.log(err.response.data))
    }
}

