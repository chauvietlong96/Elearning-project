import React, { Component } from 'react'
import { getUserDetail, updateUser } from '../../Actions/Course';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import _ from 'lodash';


export default class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state ={
            userData : {},
            taiKhoan: "",
            hoTen : "",
            soDT : "",
            email : ""
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    componentDidMount() {
        const taiKhoan = JSON.parse(localStorage.getItem("currentUser")).taiKhoan;
        getUserDetail(taiKhoan, (result) =>{
            this.setState({
                userData : result,
                taiKhoan : taiKhoan,
                hoTen : result.hoTen,
                soDT : result.soDT,
                email : result.email,
            })
        })
    }
    onSubmit = () => {
        let newUserData = {
            ...this.state.userData,
            hoTen : this.state.hoTen,
            soDT : this.state.soDT,
            email : this.state.email
        }
        newUserData = _.omit(newUserData, ["chiTietKhoaHocGhiDanh"]);
        updateUser(newUserData);
        alert("Đã cập nhật thành công");
    }
    render() {
        
        return (
            <div>
                <FormGroup>
                    <Label for="taiKhoan">Tài khoản</Label>
                    <Input type="text" name="taiKhoan" id="taiKhoan" value={this.state.taiKhoan || ''} disabled />
                </FormGroup>

                <FormGroup>
                    <Label for="hoTen">Họ Tên</Label>
                    <Input type="text" name="hoTen" id="hoTen" value={this.state.hoTen || ''} onChange={this.onChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="soDT">Số Điện Thoại</Label>
                    <Input type="text" name="soDT" id="soDT" value={this.state.soDT || ''} onChange={this.onChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="text" name="email" id="email" value={this.state.email || ''} onChange={this.onChange} />
                </FormGroup>

                <Button color="success" style={{ display: 'block', width: '100%' }} onClick={this.onSubmit}>Update</Button>
            </div>
        )
    }
}
