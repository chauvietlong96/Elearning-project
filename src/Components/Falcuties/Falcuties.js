import React, { Component } from 'react'

export default class Falcuties extends Component {
    render() {
        return (
            <div className="falcuties">
                <h1>Our Faculties</h1>
                <span>Contrary to popular belief, Lorem Ipsum is not simply random text</span>
                <div className="falcuties__item">
                    <div className="card myCard myCard__item1">
                            
                            <h4 className="card-title">Phd, Master</h4>
                    </div>
                    <div className="card myCard myCard__item2" >
                            <h4 className="card-title">Biology Instructor</h4>                       
                    </div>
                    <div className="card myCard myCard__item3" >      
                            <h4 className="card-title">Phd English</h4>
                    </div>
                    <div className="card myCard myCard__item4" >                   
                            <h4 className="card-title">Math Instructor</h4>
                    </div>
                </div>
            </div>
        )
    }
}
