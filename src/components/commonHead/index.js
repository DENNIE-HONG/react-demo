/**
 * 头部banner拦模块
 * @author luyanhong
*/
import React, { Component } from 'react';
import AutoComplete from 'coms/autoComplete';
import Dropdown from 'coms/dropdown';
import Menu from 'coms/menu';
import userImg from 'assets/img/user.png';
import { getUserInfo, logout } from 'api';
import './commonHead.scss';
class CommonHead extends Component {
  constructor () {
    super();
    this.state = {
      avatar: userImg,
      name: null
    };
    this.logout = this.logout.bind(this);
    this.fetchData();
  }
  fetchData () {
    getUserInfo().then((res) => {
      res.data.name && this.setState({
        avatar: res.data.avatar,
        name: res.data.name
      });
    }).catch((res) => {
      console.log(res.msg);
    });
  }
  logout () {
    logout().then(() => {
      this.setState({
        avatar: userImg,
        name: ''
      });
      window.location.reload(true);
    }).catch((res) => {
      console.log(res.msg);
    });
  }
  render () {
    const { avatar, name } = this.state;
    const menu = name && (
      <Menu style={{ width: '130px' }}>
        <Menu.Item><a href="/profile"><i className="iconfont icon-yonghu-xianxing"></i>我的主页</a></Menu.Item>
        <Menu.Item onClick={this.logout}>登出</Menu.Item>
      </Menu>
    );
    return (
      <header className="com-header">
        <div className="com-header-content">
          <h1 className="com-header-logo">React练习</h1>
          <nav>
            <h2>
              <a href="/" className="com-header-link">首页</a>
            </h2>
          </nav>
          <AutoComplete placeholder="搜索你感兴趣的内容" />
          <div className="com-header-user">
            <Dropdown overlay={menu}>
              <a href="/login"><img src={avatar} className="user-pic" /></a>
            </Dropdown>
          </div>
        </div>
      </header>
    );
  }
}
export default CommonHead;
