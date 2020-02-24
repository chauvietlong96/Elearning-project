import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteCourse} from '../../../Actions/adminCourse';
import {getCourseDetail} from '../../../Actions/adminCourse';

class CourseItemAdmin extends Component {

    onDelete = (maKhoaHoc) => {
        deleteCourse(maKhoaHoc)
    }

    onEdit = (maKhoaHoc) => {
        this.props._getCourseDetail(maKhoaHoc)
    }

    render() {

        const {course} = this.props;
        return (
            <React.Fragment>
                <tr>
                    <td>{course.maKhoaHoc}</td>
                    <td>{course.tenKhoaHoc}</td>
                    <td>{course.ngayTao}</td>
                    <td>{course.nguoiTao.hoTen}</td>
                    <td>
                    <button className="btn btn-danger" onClick={() => this.onDelete(course.maKhoaHoc)}>Delete</button>
                    <button className="btn btn-primary" onClick={() => this.onEdit(course.maKhoaHoc)} data-toggle="modal" data-target="#myModal">
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
        _getCourseDetail: (maKhoaHoc) => {
            dispatch(getCourseDetail(maKhoaHoc))
        }
    }
}

export default connect(null, mapDispatchToProps)(CourseItemAdmin)
