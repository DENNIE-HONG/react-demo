import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import './modal.scss';
/**
 * 对话框对外接口
 * @param {Object} option  包括type和message
 * @example
 * showMessage({
 *    type: 'error',
 *    message: '错了'
 * });
*/
function showModal (option) {
  const root = document.createElement('div');
  document.body.appendChild(root);
  render(
    <Modal title={option.title} message={option.message} domNode={root} />,
    root
  );
}
class Modal extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return ReactDOM.createPortal(
      <div className="modal-bg">
        <div className="com-modal">
          <div className="com-modal-close pull-right">
            <i className="iconfont icon-close"></i>
          </div>
          <div className="com-modal-head">
            <span>{this.props.title}</span>
          </div>
        </div>
      </div>,
      this.props.domNode
    );
  }
}
export default showModal;
