import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__about footer__item">
                    <div className="footer_header">ABOUT learningzone</div>
                    <div className="footer__about__detail">
                        <p>Duis autem vel eum iriure dolor inhendrerit in vulputate velit esse molestieconsequat, vel illum
                        dolore eu feugiatnulla facilisis at vero eros.</p>
                        <p>cmsbrand93@gmail.com</p>
                        <p>+00 123-456-789</p>
                        <p>123 6th St.Melbourne, FL 3290</p>
                    </div>
                </div>

                <div className="footer__info footer__item">
                    <div className="footer_header">INFORMATION</div>
                    <div className="footer__info__detail">
                        <ul>
                            <li>
                                <a href="/#">About Us</a>
                            </li>
                            <li>
                                <a href="/#">Our Stories</a>
                            </li>
                            <li>
                                <a href="/#">My Account</a>
                            </li>
                            <li>
                                <a href="/#">Our History</a>
                            </li>
                            <li>
                                <a href="/#">Sprcialist Info</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__student footer__item">
                    <div className="footer_header ">STUDENT HELP</div>
                    <div className="footer__student__detail">
                        <ul>
                            <li>
                                <a href="">My Info</a>
                            </li>
                            <li>
                                <a href="">My Questions</a>
                            </li>
                            <li>
                                <a href="">F.A.Q</a>
                            </li>
                            <li>
                                <a href="">Serch Courses</a>
                            </li>
                            <li>
                                <a href="">Latest Informations</a>
                            </li>

                        </ul>
                    </div>
                </div>


                <div className="instag footer__item">
                    <div className="footer_header">INSTAGRAM</div>
                    <div className="instag__detail">
                        <img src="http://learningzone.themescustom.com/theme/image.php/learningzone/theme/1556102214/instagram-1-image" alt="" />
                        <img src="http://learningzone.themescustom.com/theme/image.php/learningzone/theme/1556102214/instagram-2-image" alt="" />
                        <img src="http://learningzone.themescustom.com/theme/image.php/learningzone/theme/1556102214/instagram-3-image" alt="" />
                        <img src="http://learningzone.themescustom.com/theme/image.php/learningzone/theme/1556102214/instagram-4-image" alt="" />
                        <img src="http://learningzone.themescustom.com/theme/image.php/learningzone/theme/1556102214/instagram-5-image" alt="" />
                        <img src="http://learningzone.themescustom.com/theme/image.php/learningzone/theme/1556102214/instagram-6-image" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}
