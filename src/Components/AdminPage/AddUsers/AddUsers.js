import React, { Component } from 'react';
import { addUsers, updateUser, getUsers } from '../../../Actions/Admin';
import { connect } from 'react-redux';
import _ from 'lodash';

class AddUsers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maLoaiNguoiDung: "",
            maNhom: "",
            email: "",
            selectedUser: {},
            flag: "",
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit = () => {
        console.log(this.state, "before");
        const user = _.omit(this.state, ["selectedUser", "flag"])
        addUsers(user, (result) => console.log(result, "after"))
    }

    static getDerivedStateFromProps(props, state) {
        const { taiKhoan, matKhau, hoTen, soDT, maLoaiNguoiDung, maNhom, email } = props.edittedUser;
        if (props.edittedUser !== state.selectedUser) {
            return {
                taiKhoan,
                matKhau,
                hoTen,
                soDT,
                maLoaiNguoiDung,
                maNhom,
                email,
                selectedUser: props.edittedUser,
                flag: "Y",
            }
        }
        return null;
    }

    onUpdate = () => {
        const dataUser = _.omit(this.state, ["selectedUser"]);
        updateUser(dataUser);
    }

    onReset = () => {
        this.setState({
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maLoaiNguoiDung: "",
            maNhom: "",
            email: "",
            flag: "",
        })
    }

    render() {
        return (
            <form>
                <button type="button" className="btn my-functional-btn" onClick={this.onReset} data-toggle="modal" data-target="#myModal">
                    Add User
                    </button>
                {/* The Modal */}
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                {
                                    _.isEmpty(this.state.flag) ?
                                        <h4 className="modal-title">Add User</h4> :
                                        <h4 className="modal-title">Update User</h4>
                                }
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="taiKhoan">Tai Khoan:</label>
                                        {
                                            _.isEmpty(this.state.flag) ?
                                                <input type="text" className="form-control" value={this.state.taiKhoan || ""} name="taiKhoan" onChange={this.onChange} /> :
                                                <input type="text" className="form-control" value={this.state.taiKhoan || ""} name="taiKhoan" onChange={this.onChange} disabled />
                                        }

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pwd">Password:</label>
                                        <input type="password" className="form-control" value={this.state.matKhau || ""} name="matKhau" onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Ho Ten:</label>
                                        <input type="text" className="form-control" value={this.state.hoTen || ""} name="hoTen" onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">So DT:</label>
                                        <input type="number" className="form-control" value={this.state.soDT || ""} name="soDT" onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="maLoaiNguoiDung">Ma Loai Nguoi Dung</label>
                                        <input type="text" className="form-control" value={this.state.maLoaiNguoiDung || ""} name="maLoaiNguoiDung" onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="maNhom">Ma Nhom</label>
                                        <input type="text" className="form-control" value={this.state.maNhom || ""} name="maNhom" onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" value={this.state.email || ""} name="email" onChange={this.onChange} />
                                    </div>
                                </div>

                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer">
                                {
                                    _.isEmpty(this.state.flag) ?
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.onSubmit}>Submit</button> :
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.onUpdate}>Update</button>
                                }

                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        edittedUser: state.edittedUser,
    }
}



export default connect(mapStateToProps)(AddUsers)