import React, { Component } from 'react';
import Header from 'coms/layout/header';
import Footer from 'coms/layout/footer';
import CommonHead from 'coms/commonHead';
import userImg from 'assets/img/user.png';
import './profile.scss';
class Profile extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <div className="profile">
        <Header keywords="个人页" />
        <CommonHead />
        <div className="content">
          <header className="profile-header">
            <div className="profile-header-content">
              <div className="profile-pic"><img src={userImg} /></div>
              <div className="profile-info">
                <h1>名字</h1>
              </div>
              <a href="/edit" className="btn profile-btn">编辑个人资料</a>
            </div>
          </header>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Profile;
