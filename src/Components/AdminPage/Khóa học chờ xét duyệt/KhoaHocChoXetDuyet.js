import React, { Component } from 'react';
import {khoaHocChoXetDuyet} from '../../../Actions/adminGhiDanh';
import {connect} from "react-redux";
import {getUsers} from "../../../Actions/Admin";

class KhoaHocChoXetDuyet extends Component {
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
        this.props._khoaHocChoXetDuyet(maKhoaHoc)
    }

    render() {

        const {users, khoaHocChoXetDuyet} = this.props;
        const elmUser = users.map( (user, index) => {
            return <option value={user.taiKhoan} key={index}>{user.taiKhoan}</option>
        })
        
        const elmChoXetDuyet = khoaHocChoXetDuyet.map( (khoaHoc, index) => {
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
                    <option selected disabled>Chọn tài khoản</option>
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
                    {elmChoXetDuyet}
                </tbody>
            </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        khoaHocChoXetDuyet: state.khoaHocChoXetDuyet,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        _getUsers: () => {
            dispatch(getUsers())
        },
        _khoaHocChoXetDuyet: (maKhoaHoc) => {
            dispatch(khoaHocChoXetDuyet(maKhoaHoc))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KhoaHocChoXetDuyet)

