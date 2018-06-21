import React from 'react';
import { getUserList } from '../../api';
require('./userList.scss');

class UserList extends React.Component {
  componentDidMount () {
    getUserList().then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }
  render () {
    return (
      <div className="user-list">
        <li>
          <div className="name">名字</div>
          <img src="https://graph.facebook.com/10208663700870498/picture?type=large" className="img-circle" />
        </li>
      </div>
    );
  }
}
export default UserList;
