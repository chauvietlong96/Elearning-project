import React, { Component } from 'react'
import AddUsers from '../AddUsers/AddUsers'
import UserList from '../UserList/UserList'
import { connect } from 'react-redux';
import SearchUser from '../SearchUser/SearchUser';


class UserPage extends Component {
    render() {
        return (
            <div className="admin-content">
                <div className="admin-content-header">
                    <AddUsers />
                    <SearchUser />
                </div>
                <UserList />
            </div>
        )
    }
}



export default connect()(UserPage)
