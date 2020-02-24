import React, { Component } from 'react'

export default class Carousel extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="carouselExampleFade" className="my-carousel carousel slide carousel-fade" data-ride="carousel" data-pause="false" data-interval="4000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="http://learningzone.themescustom.com/theme/image.php/learningzone/theme/1556102214/banner2image" alt="abc" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="http://learningzone.themescustom.com/theme/image.php/learningzone/theme/1556102214/banner1image" alt="xyz" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="http://learningzone.themescustom.com/theme/image.php/learningzone/theme/1556102214/banner3image" alt="Third slide" />
                        </div>
                    </div>

                    <div className="my-carousel__content">
                        <p>Use your imagination – it is the only thing that will never run out.</p>
                        <p>Our mission is to inspire our students not only intellectually but also spiritually, through participation in the sacramental life of the school.</p>
                        <button className="my-carousel__content__btn">LEARN MORE</button>
                    </div>
                </div>

                <div className="carousel-bottom">
                    <p className="carousel-bottom__title">
                        Learning Zone By The Numbers
                </p>
                    <div className="carousel-bottom__statistic d-flex justify-content-between container">
                        <div className="carousel-bottom__item d-flex flex-row align-items-center">
                            <img src="http://learningzone.themescustom.com/theme/image.php/learningzone/theme/1556102214/icon-1" />
                            <div className="carousel-bottom__item__text d-flex flex-column">
                                <span>52,147</span>
                                <span className="font-weight-bold">Active Students</span>
                            </div>
                        </div>
                        <div className="carousel-bottom__item d-flex flex-row align-items-center">
                            <img src="http://learningzone.themescustom.com/theme/image.php/learningzone/theme/1556102214/icon-2" />
                            <div className="carousel-bottom__item__text d-flex flex-column">
                                <span>10,397</span>
                                <span className="font-weight-bold">Awards Winning</span>
                            </div>
                        </div>
                        <div className="carousel-bottom__item d-flex flex-row align-items-center">
                            <img src="http://learningzone.themescustom.com/theme/image.php/learningzone/theme/1556102214/icon-3" />
                            <div className="carousel-bottom__item__text d-flex flex-column">
                                <span>30,897</span>
                                <span className="font-weight-bold">Years of History</span>
                            </div>
                        </div>
                        <div className="carousel-bottom__item d-flex flex-row align-items-center">
                            <img src="http://learningzone.themescustom.com/theme/image.php/learningzone/theme/1556102214/icon-4" />
                            <div className="carousel-bottom__item__text d-flex flex-column">
                                <span>46,034</span>
                                <span className="font-weight-bold">Library Books</span>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
