import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserPage from './UserPage/UserPage';
import CoursePage from './CoursePage/CoursePage';
import ChuaGhiDanh from './Chưa ghi danh/ChuaGhiDanh';
import DaGhiDanh from './Đã ghi danh/DaGhiDanh';
import ChoXetDuyet from './Chờ xét duyệt/ChoXetDuyet';
import KhoaHocChuaGhiDanh from './Khóa học chưa ghi danh/KhoaHocChuaGhiDanh';
import KhoaHocDaGhiDanh from './Khóa học đã ghi danh/KhoaHocDaGhiDanh';
import KhoaHocChoXetDuyet from './Khóa học chờ xét duyệt/KhoaHocChoXetDuyet';
import NavbarAdmin from './Navbar/Navbar';
import Navbar from '../Header/Navbar';

export default class AdminPage extends Component {
    render() {
        return (
            <div className="row no-gutters">

                <Router>
                    <Navbar/>
                    <NavbarAdmin />
                    <Route path='/admin/user-page' exact component={UserPage} />
                    <Route path='/admin/course-page' exact component={CoursePage} />
                    <Route path='/admin/chua-ghi-danh' exact component={ChuaGhiDanh} />
                    <Route path='/admin/da-ghi-danh' exact component={DaGhiDanh} />
                    <Route path='/admin/cho-xet-duyet' exact component={ChoXetDuyet} />
                    <Route path='/admin/khoa-hoc-chua-ghi-danh' exact component={KhoaHocChuaGhiDanh} />
                    <Route path='/admin/khoa-hoc-da-ghi-danh' exact component={KhoaHocDaGhiDanh} />
                    <Route path='/admin/khoa-hoc-cho-xet-duyet' exact component={KhoaHocChoXetDuyet} />
                </Router>
            </div>
        )
    }
}
// nó phải chạy cái AdminPage trc roi moi vô đc mấy Route này, mà để Chạy AdminPage thì phải qua
// path: /admin (anh mở lại index xem)
