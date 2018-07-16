import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
/**
 * 确定框对外接口
 * @param {Object} option  包括title和content
 * @example
 * showModal({
 *    title: '标题',
 *    content: '对xx进行此操作'
 * });
*/
function showComfirm (option) {
  const root = document.createElement('div');
  document.body.appendChild(root);
  render(
    <Comfirm title={option.title} content={option.content} domNode={root} />,
    root
  );
}
class Comfirm extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return ReactDOM.createPortal(
      <div className="modal-bg">
        <div className="com-comfirm">
          <i className="iconfont icon-close"></i>
          <div className="com-comfirm-content">
            <h3>确定删除此项？</h3>
          </div>
        </div>
      </div>,
      this.props.domNode
    );
  }
}
export default showComfirm;
