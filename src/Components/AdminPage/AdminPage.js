import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserPage from './UserPage/UserPage';
import CoursePage from './CoursePage/CoursePage';
import Registered from './Registered/Registered';
import WaitReview from './WaitReview/WaitReview';
import NotRegisterCourse from './NotRegisterCourse/NotRegisterCourse';
import RegisteredCourse from './RegisteredCourse/RegisteredCourse';
import WaitReviewCourse from './WaitReviewCourse/WaitReviewCourse';
import NavbarAdmin from './Navbar/Navbar';
import Navbar from '../Header/Navbar';
import NotRegister from './NotRegister/NotRegister';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

export default class AdminPage extends Component {
    render() {
        return (
            <div className="row no-gutters">

                <Router>
                    <Navbar />
                    <NavbarAdmin />
                    {/* <Route exact path="/sign-in" component={SignIn} />
                    <Route exact path="/sign-up" component={SignUp} /> */}
                    <Route path='/admin/user-page' exact component={UserPage} />
                    <Route path='/admin/course-page' exact component={CoursePage} />
                    <Route path='/admin/chua-ghi-danh' exact component={NotRegister} />
                    <Route path='/admin/da-ghi-danh' exact component={Registered} />
                    <Route path='/admin/WaitReview' exact component={WaitReview} />
                    <Route path='/admin/khoa-hoc-chua-ghi-danh' exact component={NotRegisterCourse} />
                    <Route path='/admin/khoa-hoc-da-ghi-danh' exact component={RegisteredCourse} />
                    <Route path='/admin/khoa-hoc-cho-xet-duyet' exact component={WaitReviewCourse} />
                </Router>
            </div>
        )
    }
}

