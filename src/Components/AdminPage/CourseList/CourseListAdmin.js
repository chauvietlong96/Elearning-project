import React, { Component } from 'react';
import { connect } from "react-redux";
import CourseItemAdmin from '../CourseItem/CourseItemAdmin';
import { getCourses } from '../../../Actions/Course'

class CourseListAdmin extends Component {

    componentDidMount() {
        this.props.getCourses();
    }

    render() {

        const { courses } = this.props;
        // const elmCourseItemAdmin = courses.map((course, index) => {
        //     return <CourseItemAdmin course={course} key={index} />
        // })
        console.log(courses);

        return (
            <div>
                <table className="table table-striped my-table">
                    <thead>
                        <tr>
                            <th>Mã khóa học</th>
                            <th>Tên khóa học</th>
                            <th>Ngày tạo</th>
                            <th>Người tạo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, index) => {
                            return <CourseItemAdmin course={course} key={index} />
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCourses: () => {
            dispatch(getCourses());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseListAdmin);