import React, { Component } from 'react'
import AddCourse from '../AddCourse/AddCourse'
import CourseListAdmin from '../CourseList/CourseListAdmin'
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
} 
