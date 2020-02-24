import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { signUpCourse, cancelCourse } from '../../Actions/Course';
import _ from 'lodash';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';


class CourseDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUserSignIn: {},
            // maKhoaHoc: "",
            // taiKhoan: ""
        }
    }



    signInCourse = () => {
        if (!_.isEmpty(localStorage)) {
            const newUserSignIn = {
                ...this.state.newUserSignIn,
                maKhoaHoc: this.props.registerCourse.maKhoaHoc,
                taiKhoan: JSON.parse(localStorage.getItem("currentUser")).taiKhoan
            };
            console.log(newUserSignIn)
            signUpCourse(newUserSignIn);
        } else {
            alert("Xin mời đăng nhập")
        }
        
    }
    deleteCourse = () => {
        if (!_.isEmpty(localStorage)) {
            const newDeleteUserSignIn = {
                ...this.state.newUserSignIn,
                maKhoaHoc: this.props.registerCourse.maKhoaHoc,
                taiKhoan: JSON.parse(localStorage.getItem("currentUser")).taiKhoan
            };
            cancelCourse(newDeleteUserSignIn);
        } else {
            alert("Xin mời đăng nhập")
        }
    }

    render() {
        return (
            <>
                <Navbar/>
                <div className="course">
                    <div className="course-header">
                        <h1> CHI TIẾT KHÓA HỌC</h1>
                    </div>
                    <div className="course-detail">
                        <div className="course-content">
                            <Typography className="course-name" gutterBottom variant="h5" component="h2">
                                {this.props.registerCourse.tenKhoaHoc}
                            </Typography>
                            <Typography className="course-mota" variant="body2" color="textSecondary" component="p">
                                {this.props.registerCourse.moTa}
                            </Typography>
                            <Button className="course-botton" size="small" color="success" onClick={this.signInCourse}>Đăng ký</Button>
                            {/* <Button className="course-botton" size="small" color="primary" onClick={this.deleteCourse}>Hủy đăng ký</Button> */}
                        </div>
                        <div className="course-detail__media">
                            <img className="course-item__media" src={this.props.registerCourse.hinhAnh} alt="abc" />
                        </div>

                    </div>
                </div>
                <Footer/>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        registerCourse: state.courseDetail,
        currentUser: state.currentUser
    }
}
export default connect(mapStateToProps, null)(CourseDetail)
