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
            // taiKhoan: "",
            listCourseRegister: [],
        }
    }

    signInCourse = () => {
        if (!_.isEmpty(localStorage.getItem("currentUser"))) {
            const newUserSignIn = {
                ...this.state.newUserSignIn,
                maKhoaHoc: this.props.registerCourse.maKhoaHoc,
                taiKhoan: JSON.parse(localStorage.getItem("currentUser")).taiKhoan
            };
            console.log(newUserSignIn)
            signUpCourse(newUserSignIn, (result) => {
                if (result === "Ghi danh thành công!") {
                    // localArray = [...this.state.listCourseRegister, newUserSignIn.maKhoaHoc]
                    let localArray = [newUserSignIn.maKhoaHoc]
                    if (!_.isEmpty(localStorage.getItem("Course_Registered"))) {
                        localArray = [...JSON.parse(localStorage.getItem("Course_Registered")), newUserSignIn.maKhoaHoc]
                    }
                    localStorage.setItem("Course_Registered", JSON.stringify(localArray))
                    this.setState({
                        listCourseRegister: localArray
                    })
                }
            }
            );
        } else {
            alert("Xin mời đăng nhập")
        }
    }
    deleteCourse = () => {
        if (!_.isEmpty(localStorage.getItem("Course_Registered"))) {
            const newDeleteUserSignIn = {
                ...this.state.newUserSignIn,
                maKhoaHoc: this.props.registerCourse.maKhoaHoc,
                taiKhoan: JSON.parse(localStorage.getItem("currentUser")).taiKhoan
            };
            cancelCourse(newDeleteUserSignIn, (result) => {
                let localArray = JSON.parse(localStorage.getItem("Course_Registered"))
                let localArrayFilter = localArray.filter(course => {return course !== this.props.registerCourse.maKhoaHoc})
                localStorage.setItem("Course_Registered" , JSON.stringify(localArrayFilter))
                this.setState({
                    listCourseRegister: localArray
                })
            });
        } else {
            alert("Xin mời đăng nhập")
        }
    }
    render() {
        let index = -1
        if (!_.isEmpty(localStorage.getItem("currentUser"))){
            let currentCourse = JSON.parse(localStorage.getItem("Course_Registered"))
            if (currentCourse === null) currentCourse = ["temp"]
            console.log("currentCourse", currentCourse )
            let temp = this.props.registerCourse.maKhoaHoc
            index = currentCourse.findIndex(currentCourse => {return currentCourse === temp})
            console.log(this.state.index)
        }
        return (
            <>
                <Navbar />
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
                            {(index === -1)
                                ? <Button className="course-botton" size="small" color="primary" onClick={this.signInCourse}>Đăng ký</Button>
                                : <Button className="course-botton" size="small" color="primary" onClick={this.deleteCourse}>Hủy đăng ký</Button>
                            }
                        </div>
                        <div className="course-detail__media">
                            <img className="course-item__media" src={this.props.registerCourse.hinhAnh} alt="abc" />
                        </div>

                    </div>
                </div>
                <Footer />

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
