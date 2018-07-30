import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import './modal.scss';
/**
 * 对话框对外接口
 * @param {Object} option  包括title和content
 * @example
 * showModal({
 *    title: '标题',
 *    content: '对xx进行此操作'
 * });
*/
function showModal (option) {
  const root = document.createElement('div');
  document.body.appendChild(root);
  render(
    <Modal title={option.title} content={option.content} domNode={root} onOk={option.onOk} />,
    root
  );
}
class Modal extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: props.title || '对话框',
      content: props.content || '确定此操作吗?'
    };
    this.destroy = this.destroy.bind(this);
    this.onOk = this.onOk.bind(this);
  }
  componentDidMount () {
    document.documentElement.classList.add('lock');
  }
  onOk () {
    this.destroy();
    this.props.onOk && this.props.onOk();
  }
  destroy () {
    this.props.domNode.parentNode.removeChild(this.props.domNode);
    ReactDOM.unmountComponentAtNode(this.props.domNode);
    document.documentElement.classList.remove('lock');
  }
  render () {
    return ReactDOM.createPortal(
      <div className="modal-bg">
        <div className="com-modal">
          <div className="com-modal-close pull-right">
            <i className="iconfont icon-close"></i>
          </div>
          <h2 className="com-modal-head">
            <span>{this.state.title}</span>
          </h2>
          <div className="com-modal-content">{this.state.content}</div>
          <div className="com-modal-btnbox pull-right">
            <div className="btn" onClick={this.destroy}>取消</div>
            <div className="btn-primary" onClick={this.onOk}>确定</div>
          </div>
        </div>
      </div>,
      this.props.domNode
    );
  }
}
export default showModal;
