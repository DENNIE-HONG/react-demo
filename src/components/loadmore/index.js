/**
 * 加载更多模块
 * @param onClick  promise, 成功返回''/'end', 失败返回'fail'
 * @author luyanhong
 * @example
 * <Loadmore onClick={return new Primose...} />
*/
import React, { Component } from 'react';
import showMessage from 'coms/message';
import './loadmore.scss';
class Loadmore extends Component {
  constructor (props) {
    super(props);
    this.state = {
      status: ''
    };
    this.getData = this.getData.bind(this);
  }
  async getData () {
    try {
      this.loading();
      const result = await this.props.onClick();
      switch (result) {
        case 'end':
          this.toEnd();
          break;
        default:
          this.setState({
            status: ''
          });
          break;
      }
    } catch (err) {
      this.fail();
      showMessage({
        type: 'error',
        message: err
      });
    }
  }
  loading () {
    this.setState({
      status: 'active'
    });
  }
  toEnd () {
    this.setState({
      status: 'end'
    });
  }
  fail () {
    this.setState({
      status: 'fail'
    });
  }
  render () {
    return (
      <div className={`loadmore ${this.state.status}`}>
        <div className="loadmore-txt" onClick={this.getData}>点击加载更多</div>
        <span className="loadmore-loading">拼命加载中...</span>
        <div className="loadmore-end">
          <span>我是有底线的</span>
        </div>
        <span className="loadmore-fail">加载失败</span>
      </div>
    );
  }
}
export default Loadmore;
