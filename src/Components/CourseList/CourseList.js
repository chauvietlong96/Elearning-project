import React, { Component } from 'react'
import { connect } from 'react-redux';
import CourseItem from '../CourseItem/CourseItem';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

class CourseList extends Component {
    render() {
        // console.log(this.props.courses);
        const { courses } = this.props;
        const elmCourse = courses.map((course, index) => {
            return <Grid xs={4} item key={index}>
                <CourseItem course={course} />
            </Grid>

        })
        return (
            <div className="course-list my-5 container">
                <Typography component="h1" className="course-list__title">
                Discover Our Programs
                </Typography>
                <Typography component="p" className="course-list__describe">
                You Can Enroll Wide Range Of Courses In This Canvas To Full Fill Your Dreams.
                </Typography>
                <Grid container className="course-list__container mt-4">
                    {elmCourse}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses,
    }
}

export default connect(mapStateToProps)(CourseList);
