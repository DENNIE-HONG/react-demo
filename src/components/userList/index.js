/**
 * 用户列表模块
 * @author luyanhong
 * @example
 * <UserList />
*/
import React, { Component } from 'react';
import { getUserList } from 'api';
require('./userList.scss');

class UserList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userList: []
    };
  }
  componentDidMount () {
    getUserList().then((res) => {
      this.setState({
        userList: res.collections
      });
    }).catch((err) => {
      console.log(err);
    });
  }
  render () {
    return (
      <div className="user-list">
        {this.state.userList.map((user) =>
          (
            <li key={user.id}>
              <div className="name">{user.owner_name}</div>
              <img src={user.avatar} className="img-circle" />
            </li>
          ))}
      </div>
    );
  }
}
export default UserList;
