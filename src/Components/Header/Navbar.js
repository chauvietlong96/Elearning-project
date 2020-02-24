import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { getMenuCourse, getCourseFromMenu, searchCourse } from '../../Actions/Course';
import Button from '@material-ui/core/Button';
import _ from 'lodash';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state ={
            userName : ""
        }
    }

    componentDidMount() {
        this.props.getMenuCourse();
        this.props.getCourseFromMenu()
        if (!_.isEmpty(localStorage)) {
            this.state.userName = JSON.parse(localStorage.getItem("currentUser")).taiKhoan;
        }
        

    }
    onLogOut = () => {
        localStorage.removeItem('currentUser');
        this.props.history.push("/");
        window.location.reload();
    }
    
    render() {
        
            const user = JSON.parse(localStorage.getItem("currentUser"));
        
        
        console.log("test", this.props.courseMenu)
        
        console.log(this.state.userName);
        const element = this.props.courseMenu.map((danhMuc, index) => {
            return <a className="dropdown-item dropdown" data-toggle="dropdown" href="#" key = {index}>{danhMuc.tenDanhMuc}</a>
        })
        
        return (
            <div className="my-navbar">
                <nav className="navbar navbar-expand-sm d-flex justify-content-center align-items-center">
                    <Link to="/" className="navbar__logo">
                        <img src="http://learningzone.themescustom.com/theme/image.php/learningzone/theme/1556102214//logo" alt="logo" />
                    </Link>
                    <ul className="navbar-nav d-flex justify-content-center align-items-center">
                        {
                            !_.isEmpty(localStorage) ? ((user.maLoaiNguoiDung === "HV") ?
                            <>
                            <li className="nav-item">
                            <a className="nav-link home" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <div className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown"/>
                                    Courses
  
                                <div className="dropdown-menu">
                                {element}
                                <div className="dropdown-menu">
                                <a className="dropdown-item"  href="#">Link 3</a>
                                </div>
                                </div>
                            </div>
                        </li>
                            </> :
                            <></>) :
                            <>
                                <li className="nav-item">
                            <a className="nav-link home" href="#">
                                Home
                            </a>
                        </li>
                        
                        <li className="nav-item">
                            <div className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown"/>
                                    Courses
  
                                <div className="dropdown-menu">
                                {element}
                                <div className="dropdown-menu">
                                <a className="dropdown-item"  href="#">Link 3</a>
                                </div>
                                </div>
                            </div>
                        </li>
                            </>
                        }
                        <li className="nav-item" >
                            <Link to = "/search-course"><a className="nav-link" href="#">Search</a></Link>
                        </li>
                    </ul>
                    {
                        ( _.isEmpty(localStorage) )? 
                        <React.Fragment>
                            <Link to="/sign-in" className="log-in ">Sign in</Link>
                            <Link to="/sign-up" className="log-in ">Sign up</Link>
                        </React.Fragment>:
                        <React.Fragment>
                        <Link to = {`/current-user/${this.state.userName}`}>
                                <i className="fas fa-user-circle"></i>
                        </Link>
                        <Button color="inherit" onClick = {this.onLogOut}>Log out</Button>
                      </React.Fragment>
                        
                    }
                </nav>
                {
                    !_.isEmpty(localStorage) ? ((user.maLoaiNguoiDung === "HV") ?
                    <>
                    <div className="navbar-bottom">
                    <div className="container d-flex align-items-center justify-content-between navbar-bottom__content">
                        <div className="navbar-bottom__left">
                            <span>Your total courses </span>
                            <span className="navbar-bottom__left__number">0</span>
                        </div>
                        <div className="navbar-bottom__right">
                            <a href="#">Courses</a>
                            <a href="#">Calendar</a>
                        </div>
                    </div>
                </div>
                </> :
                <></>)
                    : <>
                    <div className="navbar-bottom">
                    <div className="container d-flex align-items-center justify-content-between navbar-bottom__content">
                        <div className="navbar-bottom__left">
                            <span>Your total courses </span>
                            <span className="navbar-bottom__left__number">0</span>
                        </div>
                        <div className="navbar-bottom__right">
                            <a href="#">Courses</a>
                            <a href="#">Calendar</a>
                        </div>
                    </div>
                </div>
                </>
                }
                    
                  
                
            </div>

        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMenuCourse : () =>{
        dispatch(getMenuCourse())
      },
      getCourseFromMenu: () => {
          dispatch(getCourseFromMenu())
      }
      
    }}
const mapStateToProps = (state) =>{
    return{
        courseMenu : state.courseMenu,
        currentUser : state.currentUser
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Navbar))