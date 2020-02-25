import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getMenuCourse, getCourses} from '../../../Actions/Course';
import {notRegister} from '../../../Actions/adminGhiDanh';
import _ from "lodash";


class NotRegister extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maDanhMuc: "BackEnd",
            MaKhoaHoc: "LTJ_02",
        }
    }

    componentDidMount() {
        this.props._getCourses()
        this.props._getCourseCate()
        this.onSearch()
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        }, console.log(this.state,"madanhmuc")
        )
    }

    onSearch = () => {
        const maKhoaHoc = _.omit(this.state, ["maDanhMuc"])
        this.props._notRegister(maKhoaHoc)
    }

    render() {

        const {courseCate,courses, chuaGhiDanhList } = this.props;
        const elmCate = courseCate.map( (cate, index) => {
            return <option key={index} value={cate.maDanhMuc}>{cate.tenDanhMuc}</option>
        })

        const elmCourseByCate = courses.filter( (course) => this.state.maDanhMuc === course.danhMucKhoaHoc.maDanhMucKhoahoc).map((course, index) => {
            return <option key={index} value={course.maKhoaHoc}>{course.maKhoaHoc}</option>
        })

        const elmChuaGhiDanh = chuaGhiDanhList.map( (item, index) => {
            return (
                <tr>
                    <td>{item.taiKhoan}</td>
                    <td>{item.matKhau}</td>
                    <td>{item.biDanh}</td>
            </tr>
            )
            
        })

        return (
            <div className="admin-content">
                <div className="admin-content-header">
                <lable htmlFor="">Danh mục</lable>
                <select name="maDanhMuc" onChange={this.onChange}>
                    {/* <option selected disabled>Chọn danh mục</option> */}
                    {elmCate}
                </select>

                <lable htmlFor="">Khóa học</lable>
                <select name="MaKhoaHoc" onChange={this.onChange}>
                    {/* <option selected disabled>Chọn khóa học</option> */}
                    {elmCourseByCate}
                </select>

                <button className="btn btn-success" onClick={this.onSearch}>Search</button>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th>Tài khoản</th>
                        <th>Mật khẩu</th>
                        <th>Bí danh</th>
                        </tr>
                    </thead>
                <tbody>
                    {elmChuaGhiDanh}
                </tbody>
            </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        courseCate: state.courseMenu,
        courses: state.courses,
        chuaGhiDanhList: state.chuaGhiDanhList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        _getCourseCate: () => {
            dispatch(getMenuCourse())
        },
        _getCourses: () => {
            dispatch(getCourses())
        },
        _notRegister: (maKhoaHoc) => {
            dispatch(notRegister(maKhoaHoc))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotRegister)
