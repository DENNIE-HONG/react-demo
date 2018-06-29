import React, { Component } from 'react';
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
    this.props.value = value;
    this.setState({ value });
  }
  render () {
    const { placeholder, maxLength, value } = this.state;
    return (
      <input type="text" placeholder={placeholder} maxLength={maxLength} onChange={this.handleChange} value={value} />
    );
  }
}
export default Input;
