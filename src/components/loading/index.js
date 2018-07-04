/**
 * 首屏正在加载中动画
 * @author luyanhong
 * @example
 * <Loading />
*/
import React, { Component } from 'react';
import './loading.scss';
class Loading extends Component {
  render () {
    return (
      <div className="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
}
export default Loading;
