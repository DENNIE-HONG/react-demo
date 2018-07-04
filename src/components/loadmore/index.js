/**
 * 加载更多模块
 * @author luyanhong
*/
import React, { Component } from 'react';
import './loadmore.scss';
class Loadmore extends Component {
  constructor (props) {
    super(props);
    this.state = {
      status: ''
    };
  }
  render () {
    return (
      <div className="loadmore" onClick={this.props.onClick}>
        <span className="loadmore-txt">点击加载更多</span>
        <span className="loadmore-loading">拼命加载中...</span>
        <span className="loadmore-end">我是有底线的</span>
      </div>
    );
  }
}
export default Loadmore;
