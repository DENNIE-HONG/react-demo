import React from 'react';
import ComponentHeader from 'coms/layout/header';
import UserList from 'coms/userList';
import './home.scss';
class Home extends React.Component {
  render () {
    return (
      <div>
        <ComponentHeader keywords="react练习" />
        <div className="container-left">
          <h1>测试</h1>
          <div className="tag-list">
            <a className="tag" href="/">
              <span>首页</span>
            </a>
          </div>
        </div>
        <div className="container-right">
          <UserList />
        </div>
      </div>
    );
  }
}
export default Home;
