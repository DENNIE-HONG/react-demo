import React from 'react';
require('./userList.scss');
function userList () {
  return (
    <div className="user-list">
      <li>
        <div className="name">名字</div>
        <img src="https://graph.facebook.com/10208663700870498/picture?type=large" className="img-circle" />
      </li>
    </div>
  );
}
export default userList;
