/**
 * 消息弹窗
*/
import React, { Component } from 'react';
import './message.scss';
class Message extends Component {
  constructor (props) {
    super(props);
    this.state = {
      type: props.type,
      message: props.message
    };
    this.remove();
  }
  remove () {
    const newMessage = '';
    setTimeout(() => {
      this.setState({
        message: newMessage
      });
      if (this.props.callback) {
        this.props.callback('');
      }
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
    return (
      <div>{messageContainer}</div>
    );
  }
}
export default Message;
