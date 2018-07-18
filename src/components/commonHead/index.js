import React, { Component } from 'react';
import AutoComplete from 'coms/autoComplete';
import Dropdown from 'coms/dropdown';
import { Menu } from 'coms/menu';
import testImg from 'assets/img/user.png';
import './commonHead.scss';
class CommonHead extends Component {
  render () {
    const menu = (
      <Menu style={{ width: '130px' }}>
        <Menu.Item><a href="/profile"><i className="iconfont icon-yonghu-xianxing"></i>我的主页</a></Menu.Item>
        <Menu.Item>选项2</Menu.Item>
      </Menu>
    );
    return (
      <header className="com-header">
        <div className="com-header-content">
          <div className="com-header-logo"></div>
          <nav>
            <a href="/" className="com-header-link">首页</a>
          </nav>
          <AutoComplete placeholder="搜索你感兴趣的内容" />
          <div className="com-header-user">
            <Dropdown overlay={menu}>
              <img src={testImg} className="user-pic" />
            </Dropdown>
          </div>
        </div>
      </header>
    );
  }
}
export default CommonHead;
