import React, { Component } from 'react';
import AutoComplete from 'coms/autoComplete';
import './commonHead.scss';
class CommonHead extends Component {
  render () {
    return (
      <header className="com-header">
        <div className="com-header-content">
          <div className="com-header-logo"></div>
          <nav>
            <a href="/" className="com-header-link">首页</a>
          </nav>
          <AutoComplete placeholder="搜索你感兴趣的内容" />
        </div>
      </header>
    );
  }
}
export default CommonHead;
