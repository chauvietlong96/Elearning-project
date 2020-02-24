import React, { Component } from 'react'
import AddCourse from '../AddCourse/AddCourse'
import CourseListAdmin from '../CourseList/CourseListAdmin'
import { getCourses } from '../../../Actions/Course'
import { connect } from 'react-redux';
import SearchCourse from '../SearchCourse/SearchCourse';

export default class CoursePage extends Component {
    render() {
        console.log(3445);

        return (
            <div className="admin-content">
                <div className="admin-content-header">
                    <AddCourse />
                    <SearchCourse />
                </div>
                <CourseListAdmin />

            </div>
        )
    }
} //anh connect de lam gi vay anh , OKE rồi nhé.

//ok em. anh hiểu rồi. má ơi haha. cám ơn em nhiều nhe.
// Oke anh, em out nhé
// lúc đầu connect để gọi dispatch api á. xong sau đó a gọi api ở bên CourseList luôn
// vay thi phai goi api o day
//routing co van de
// qua file index.js xem routing đi em
