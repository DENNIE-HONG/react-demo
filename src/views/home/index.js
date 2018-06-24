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
              <img src="//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
              <span>首页</span>
            </a>
            <a className="tag" href="/login">
              <img src="//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
              <span>登录页</span>
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
