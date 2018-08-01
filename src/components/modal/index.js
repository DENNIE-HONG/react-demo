/**
 * 对话框对外接口
 * @param {Object} option  包括title、content、onOk
 * @example
 * showModal({
 *    title: '标题',
 *    content: '对xx进行此操作'
 * });
*/
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import PropTypes from 'prop-types';
import './modal.scss';
function showModal (option) {
  const root = document.createElement('div');
  document.body.appendChild(root);
  render(
    <Modal title={option.title} content={option.content} domNode={root} onOk={option.onOk} />,
    root
  );
}
class Modal extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    onOk: PropTypes.func
  }
  static defaultProps = {
    title: '对话框',
    content: '确定此操作吗?',
    onOk: undefined
  }
  constructor (props) {
    super(props);
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
            <span>{this.props.title}</span>
          </h2>
          <div className="com-modal-content">{this.props.content}</div>
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
