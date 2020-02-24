import React, { Component } from 'react';
import {deleteUser, getUserDetail} from '../../../Actions/Admin';
import {connect} from 'react-redux';


class UserItem extends Component {

    onDelete = (taiKhoan) => {
        deleteUser(taiKhoan)
    }

    onEdit = (taiKhoan) => {
        this.props._getUserDetail(taiKhoan)
    }

    render() {
        const {user} = this.props
        return (
            <React.Fragment>
                <tr>
                    <td>{user.taiKhoan}</td>
                    <td>{user.hoTen}</td>
                    <td>{user.email}</td>
                    <td>{user.soDt}</td>
                    <td>
                    <button className="btn btn-danger" onClick={() => this.onDelete(user.taiKhoan)}>Delete</button>
                    <button className="btn btn-primary" onClick={() => this.onEdit(user.taiKhoan)} data-toggle="modal" data-target="#myModal">
                        Edit
                    </button>
                    </td>
                </tr>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        _getUserDetail: (taiKhoan) => {
            dispatch(getUserDetail(taiKhoan))
        }
    }
}

export default connect(null, mapDispatchToProps)(UserItem)