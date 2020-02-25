import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Header/Navbar';

export default class NavbarAdmin extends Component {

    render() {
        return (
            <>
            <aside className="sideBar">
                <div className="sideBar-title">
                    <p>ADMIN PAGE</p>
                </div>
                <nav className="navbar navbar-expand-sm admin-navbar">

                    {/* Links */}
                    <ul className="navbar-nav admin-navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" activeClassName='is-active' to="/admin/user-page">UserPage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" activeClassName='is-active' to="/admin/course-page">CoursePage</Link>
                        </li>
                        <li className="nav-item">
                            <div>
                                <a href="#demo1" className="btn-title" data-toggle="collapse">Ghi danh người dùng dựa vào khóa học</a>
                                <div id="demo1" className="collapse">
                                    <Link className="nav-link" activeClassName='is-active' to="/admin/chua-ghi-danh">Chưa ghi danh</Link>
                                    <Link className="nav-link" activeClassName='is-active' to="/admin/da-ghi-danh">Đã ghi danh</Link>
                                    <Link className="nav-link" activeClassName='is-active' to="/admin/cho-xet-duyet">Chờ xét duyệt</Link>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div>
                                <a href="#demo2" className="btn-title" data-toggle="collapse">Ghi danh khóa học dựa vào người dùng</a>
                                <div id="demo2" className="collapse">
                                    <Link className="nav-link" activeClassName='is-active' to="/admin/khoa-hoc-chua-ghi-danh">Khóa học chưa ghi danh</Link>
                                    <Link className="nav-link" activeClassName='is-active' to="/admin/khoa-hoc-da-ghi-danh">Khóa học đã ghi danh</Link>
                                    <Link className="nav-link" activeClassName='is-active' to="/admin/khoa-hoc-cho-xet-duyet">Khóa học chờ xét duyệt</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </aside>
            </>
        )
    }
}
