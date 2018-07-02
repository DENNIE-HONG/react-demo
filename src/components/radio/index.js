/**
*  单选框组件
* @param {String}   value     初始值
* @param {String}   name      默认'', 互斥radio的name需要相同
* @param {Boolean}  checked
* @param {function} onChange  父组件定义此函数回调获取新数据
*/
import React, { Component } from 'react';
import './radio.scss';
class Radio extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: props.value || '',
      name: props.name || '',
      checked: props.checked || false
    };
  }
  handleChange (event) {
    const { value } = event.target;
    this.setState({
      value: value
    });
    this.props.onChange(value);
  }
  render () {
    const children = this.props.children !== undefined ? this.props.children : null;
    const checked = this.state.checked ? 'checked' : '';
    return (
      <label className="com-radio">
        <input type="radio" className="com-radio-original" value={this.state.value} onChange={this.handleChange.bind(this)} name={this.state.name} checked={checked} />
        <span>{children}</span>
      </label>
    );
  }
}
export default Radio;
