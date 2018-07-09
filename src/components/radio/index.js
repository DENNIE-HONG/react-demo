/**
*  单选框组件
* @param {String}   value     初始值
* @param {String}   name      默认'', 互斥radio的name需要相同
* @param {Boolean}  checked
* @param {function} onChange  父组件定义此函数回调获取新数据
* @author luyanhong
* @example
* <Radio value="1" onChange={function} checked="false" >xxx</Radio>
*/
import React, { Component } from 'react';
import './radio.scss';
class Radio extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: props.name || ''
    };
  }
  handleChange (event) {
    const { value } = event.target;
    // 回调给父组件
    this.props.onChange(value);
  }
  render () {
    const children = this.props.children !== undefined ? this.props.children : null;
    const checked = this.props.checked ? 'checked' : '';
    return (
      <label className="com-radio">
        <input type="radio" className="com-radio-original" value={this.props.value} onChange={this.handleChange.bind(this)} name={this.state.name} checked={checked} />
        <span>{children}</span>
      </label>
    );
  }
}
export default Radio;
