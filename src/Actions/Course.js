import api from './../API';
import * as Types from './../Constants';

export const getCourses = () => {
    return (dispatch) => {
        api
            .get('/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
            .then(res => {
                dispatch({
                    type: Types.GET_COURSES,
                    payload: res.data,
                })
            })
            .catch(err => console.log(err)
            )
    }
}
export const searchCourse = (tenKhoaHoc, callback) => {
    return (
        api
            .get(`/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=GP01`)
            .then(res => {
                console.log(res.data);
                callback(res.data)
            })
            .catch(err => console.log(err.response.data))
    )

}

export const signUpUser = (dataUser, callback) => {
    api
        .post('/QuanLyNguoiDung/DangKy', dataUser)
        .then(res => {
            console.log(res.data)
            callback()
        })
        .catch(err => console.log(err.response.data))
}

export const signInUser = (dataUser, callback) => {
    api
        .post('/QuanLyNguoiDung/DangNhap', dataUser)
        .then(res => {
            localStorage.setItem("currentUser", JSON.stringify(res.data));
            callback(res.data)
        })
        .catch(err => console.log(err))
}

export const setCurrentUser = (dataUser) => {
    return {
        type: Types.GET_CURRENT_USER,
        payload: dataUser
    }
}
export const getDetailCourse = (detailData) => {
    return (dispatch) => {
        api
            .get(`/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${detailData}`)
            .then(res => {
                dispatch({
                    type: Types.COURSE_DETAIL,
                    payload: res.data
                })
            })
            .catch(err => console.log(err.response.data))
    }
}

export const getMenuCourse = () => {
    return (dispatch) => {
        api
            .get('/QuanLyKhoaHoc/LayDanhMucKhoaHoc')
            .then(res => {
                // console.log("api", res.data);
                dispatch({
                    type: Types.GET_MENU,
                    payload: res.data,
                })
            })
            .catch(err => console.log(err.response.data))
    }
}

export const getCourseFromMenu = () => {
    return (dispatch) => {
        api
            .get('/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=TuDuy&MaNhom=GP01')
            .then(res => {
                console.log("api", res.data)
                dispatch({
                    type: Types.GET_COURSE_FROM_MENU,
                    payload: res.data
                })
            })
            .catch(err => console.log(err.response.data))
    }
}


export const getUserDetail = (taiKhoan, callback) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    api.defaults.headers.common["Authorization"] = 'Bearer ' + user.accessToken;
    api
        .post("/QuanLyNguoiDung/ThongTinTaiKhoan", { taiKhoan })
        .then(res => {
            console.log(res.data);
            callback(res.data)
        })
        .catch(err => console.log(err.response.data))

}

export const updateUser = (dataUser, callback) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    api.defaults.headers.common["Authorization"] = 'Bearer ' + user.accessToken;
    api
        .put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", dataUser)
        .then(res => {
            console.log(res.data);
            if (callback) callback(res.data)
        })
        .catch(err => console.log(err.response.data))
}

export const signUpCourse = (dataCourse, callback) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    console.log(user)
    api.defaults.headers.common["Authorization"] = 'Bearer ' + user.accessToken;
    api
        .post("/QuanLyKhoaHoc/DangKyKhoaHoc", dataCourse)
        .then(res => {
            console.log("khong thanh cong" , res.data);
            alert("Đăng ký khóa học thành công")
            callback(res.data)
        })
        .catch(err => {
            console.log(err.response.data);
            console.log("thanh cong" );
            alert(`${err.response.data}`)
        })
}

export const cancelCourse = (dataCourse, callback) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    console.log(user)
    api.defaults.headers.common["Authorization"] = 'Bearer ' + user.accessToken;
    api
        .post("/QuanLyKhoaHoc/HuyGhiDanh", dataCourse)
        .then(res => {
            console.log("Hủy thành công",res.data);
            alert("Hủy đăng ký khóa học thành công")
            callback(res.date)
        })
        .catch(err => {
            console.log(err.response.data);
            // alert(`${err.response.data}`)
        })
}


