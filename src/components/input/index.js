/**
 * 输入框组件
 * @param {String}   placeholder
 * @param {Number}   maxLength
 * @param {String}   value
 * @param {function} onChange
 * @author luyanhong
*/
import React, { Component } from 'react';
import './input.scss';
class Input extends Component {
  constructor (props) {
    super(props);
    this.state = {
      placeholder: props.placeholder || '请输入内容',
      maxLength: props.maxLength || 1000,
      value: props.value || ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (event) {
    const { value } = event.target;
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }
  render () {
    const { placeholder, maxLength, value } = this.state;
    return (
      <input type="text" placeholder={placeholder} maxLength={maxLength} onChange={this.handleChange} value={value} className="com-input" />
    );
  }
}
export default Input;
