import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getDetailCourse } from '../../Actions/Course';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function CourseItem(props) {
    const { course } = props;
    const getDetail = () => {
        props.getDetailCourse (course.maKhoaHoc);
    }
    return (
        <Card className="course-item">
            <CardActionArea>
                <CardMedia
                    className="course-item__media"
                    image={course.hinhAnh}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {course.tenKhoaHoc}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {course.moTa}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* <Button size="small" color="primary">
                    Share
        </Button> */}
                <Link to = "/course-detail"><Button size="small" color="primary" onClick = {getDetail}>
                    Detail
        </Button></Link>
            </CardActions>
        </Card>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDetailCourse : (data) =>{
            dispatch(getDetailCourse(data))
        }
    }
}
export default connect(null, mapDispatchToProps)(CourseItem)