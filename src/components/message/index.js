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
      message: props.message,
      isRemove: false
    };
    this.remove();
  }
  remove () {
    setTimeout(() => {
      this.setState({
        isRemove: true
      });
    }, 3000);
  }
  render () {
    const { type, message, isRemove } = this.state;
    let messageContainer = null;
    if (!isRemove) {
      messageContainer = (
        <div className="message">
          <div className={type}>
            <i>icon</i>{message}
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
