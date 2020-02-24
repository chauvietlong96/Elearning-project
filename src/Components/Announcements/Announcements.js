import React, { Component } from 'react'

export default class Announcements extends Component {
    render() {
        return (
            <div className="announcements py-4">
                <div className="announcements__title">
                    <p>Site Announcements</p>
                    <button>SUBSCRIBE TO THIS FORUM</button>
                </div>
                <div id="demo" className="carousel slide announcements__slide my-4" data-pause="false">

                    <ul className="carousel-indicators my-indicators">
                        <li data-target="#demo" data-slide-to={0} className="active" />
                        <li data-target="#demo" data-slide-to={1} />
                    </ul>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="http://learningzone.themescustom.com/pluginfile.php/5/user/icon/learningzone/f2?rev=232" />
                            <p className="font-weight-bold">Enjoy New Dashboard with tot's of New Features</p>
                            <div>
                                <a href="#">Admin User</a>
                                <p>Monday, 22 May 2017, 11:09 AM</p>
                            </div>
                            <p>Easely can change theme color with any color scheme through Theme Options.</p>
                            <div>
                                <a href="#">Permalink</a>
                                <br />
                                <a href="#">View the discussion</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="http://learningzone.themescustom.com/pluginfile.php/5/user/icon/learningzone/f2?rev=232" />
                            <p className="font-weight-bold">Creating Dynamic Color Schemes with Theme Options.</p>
                            <div>
                                <a href="#">Admin User</a>
                                <p>Monday, 22 May 2017, 11:09 AM</p>
                            </div>
                            <p>Moodle 3.3 has landed with new features and improvements to empower educators in their online classrooms!</p>
                            <div>
                                <a href="#">Permalink</a>
                                <br />
                                <a href="#">View the discussion</a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        )
    }
}
