import React, { Component } from 'react';
import Header from 'coms/layout/header';
import CommonHead from 'coms/commonHead';
import userImg from 'assets/img/user.png';
import isLogin from 'utils/islogin';
import { getUserInfo } from 'api';
import './profile.scss';
class Profile extends Component {
  constructor (props) {
    super(props);
    this.state = {
      avatar: userImg,
      name: ''
    };
  }
  componentDidMount () {
    if (!isLogin()) {
      this.props.history.push('/login', null);
      return;
    }
    getUserInfo().then((res) => {
      this.setState({
        avatar: res.data.avatar,
        name: res.data.name
      });
    }).catch((res) => {
      console.log(res.msg);
    });
  }
  render () {
    return (
      <div className="profile">
        <Header keywords="个人页" />
        <CommonHead />
        <div className="content">
          <header className="profile-header">
            <div className="profile-header-content">
              <div className="profile-pic"><img src={this.state.avatar} /></div>
              <div className="profile-info">
                <h1>{this.state.name}</h1>
              </div>
              <a href="/edit" className="btn profile-btn">编辑个人资料</a>
            </div>
          </header>
        </div>
      </div>
    );
  }
}
export default Profile;
