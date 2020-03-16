import React, { Component } from 'react';
import {connect} from "react-redux";
import {searchCourse} from '../../../Actions/adminCourse'

class SearchCourse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tenKhoaHoc: "",
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        }, console.log(this.state)
        )
    }

    onSearch = (keyWord) => {
        this.props._searchCourse(keyWord)
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Search..." name="tenKhoaHoc" onChange={this.onChange} />
                <button className="btn btn-primary my-search-btn" onClick={() => this.onSearch(this.state.tenKhoaHoc)}>Search</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        _searchCourse: (keyWord) => {
            dispatch(searchCourse(keyWord))
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchCourse)
