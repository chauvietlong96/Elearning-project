import React, { Component } from 'react';
import {connect} from 'react-redux';
import {searchUser} from '../../../Actions/Admin';

class SearchUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hoTen: "",
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    onSearch = (keyWord) => {
        this.props.searchUser(keyWord);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Search.." name="hoTen" onChange={this.onChange} />
                <button className="btn my-search-btn" onClick={() => this.onSearch(this.state.hoTen)}>Search</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchUser: (keyWord) => {
            dispatch(searchUser(keyWord))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);
