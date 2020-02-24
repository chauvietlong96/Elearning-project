import React, { Component } from 'react';
import {connect} from "react-redux";
import {getUsers} from "../../../Actions/Admin";
import {khoaHocChuaGhiDanh} from '../../../Actions/adminGhiDanh';

class KhoaHocChuaGhiDanh extends Component {

    constructor (props) {
        super(props);
        this.state = {
            TaiKhoan: "",
        }
    }

    componentDidMount() {
        this.props._getUsers()
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSearch = (maKhoaHoc) => {
        this.props._khoaHocChuaGhiDanh(maKhoaHoc)
    }

    render() {

        const {users, khoaHocChuaGhiDanh} = this.props;
        const elmUser = users.map( (user, index) => {
            return <option value={user.taiKhoan} key={index}>{user.taiKhoan}</option>
        })
        
        const elmChuaGhiDanh = khoaHocChuaGhiDanh.map( (khoaHoc, index) => {
            return (
                <tr>
                    <td>{khoaHoc.maKhoaHoc}</td>
                    <td>{khoaHoc.tenKhoaHoc}</td>
                    <td>{khoaHoc.biDanh}</td>
            </tr>
            )
        })

        return (
            <div className="admin-content">
                <div className="admin-content-header">
                <lable htmlFor="" className="px-3">Tài khoản:</lable>
                <select name="TaiKhoan" onChange={this.onChange} className="px-3 mx-3">
                    <option selected disabled>Chọn danh mục</option>
                    {elmUser}
                </select>

                <button className="btn btn-success" onClick={() => this.onSearch(this.state)}>Search</button>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th>Mã khóa học</th>
                        <th>Tên khóa học</th>
                        <th>Bí danh</th>
                        <th></th>
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
        users: state.users,
        khoaHocChuaGhiDanh: state.khoaHocChuaGhiDanh,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        _getUsers: () => {
            dispatch(getUsers())
        },
        _khoaHocChuaGhiDanh: (maKhoaHoc) => {
            dispatch(khoaHocChuaGhiDanh(maKhoaHoc))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KhoaHocChuaGhiDanh)