import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../../../Actions/Admin';
import UserItem from '../UserItem/UserItem';

class UserList extends Component {

    componentDidMount() {
        this.props._getUsers();
    }

    render() {
        const {users} = this.props;
        const elmUserItem = users.map( (user, index) => {
            return <UserItem user={user} key={index} />
        })
        return (
            <table className="table table-striped my-table">
                <thead>
                    <tr>
                        <th>Tài khoản</th>
                        <th>Họ tên</th>
                        <th>Email</th>
                        <th>Số ĐT</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {elmUserItem}
                </tbody>
            </table>
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
        _getUsers: () => {
            dispatch(getUsers())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
