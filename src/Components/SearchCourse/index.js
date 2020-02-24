import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { searchCourse } from '../../Actions/Course';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import Navbar from '../Header/Navbar';
import CourseItem from '../CourseItem/CourseItem';


class SearchCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tenKhoaHoc: "",
            hinhAnh: "",
            moTa: "",
            resultCourse: [],
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    onSearchCourse = () => {
        const nameCourse = this.state.tenKhoaHoc;
        console.log(nameCourse);
        searchCourse(nameCourse, (result) => {
            this.setState({
                resultCourse: result,
            })
        })
    }  
    render() {
        const element = this.state.resultCourse.map((course, index) => {
            return <Grid xs={4} item key={index}>
                 <CourseItem course={course} />
            </Grid>
        })
        return (
            <React.Fragment>
                <Navbar />
                <div className="course-list my-5 container search">
                    <InputGroup>
                        <Input type="text" name="tenKhoaHoc" onChange={this.onChange} />
                        <InputGroupAddon addonType="append">
                            <Button color="secondary" onClick={this.onSearchCourse} >Search Course</Button>
                        </InputGroupAddon>
                    </InputGroup>
                    <Grid container className="course-list__container  mt-4">
                        {element}
                    </Grid>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        getCourse: state.course
    }

}
export default connect(mapStateToProps)(SearchCourse);
