/**
 * 消息弹窗
 * @param {String}  type    默认是info
 * @param {String}  message 必须，提示文本
 * @author luyanhong
*/
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import './message.scss';
class Message extends Component {
  constructor (props) {
    super(props);
    this.state = {
      type: props.type || 'info',
      message: props.message || ''
    };
    this.remove();
  }
  // 3秒后清除提示
  remove () {
    const self = this;
    const newMessage = '';
    setTimeout(() => {
      this.setState({
        message: newMessage
      });
      self.props.domNode.parentNode.removeChild(self.props.domNode);
      ReactDOM.unmountComponentAtNode(self.props.domNode);
    }, 3000);
  }
  render () {
    const { type, message } = this.state;
    let messageContainer = null;
    if (message) {
      messageContainer = (
        <div className="message">
          <div className={type}>
            <i className={`iconfont icon-${type}`}></i>{message}
          </div>
        </div>
      );
    }
    return ReactDOM.createPortal(
      <div>{ messageContainer }</div>,
      this.props.domNode
    );
  }
}
/**
 * 消息提示对外接口
 * @param {Object} option  包括type和message
 * @example
 * showMessage({
 *    type: 'error',
 *    message: '错了'
 * });
*/
function showMessage (option) {
  const root = document.createElement('div');
  document.body.appendChild(root);
  render(
    <Message type={option.type} message={option.message} domNode={root} />,
    root
  );
}
export default showMessage;
