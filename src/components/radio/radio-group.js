/**
 * radio单选组
 * @param value     {String | Number}默认选中的值
 * @param onChange  {function} 给父组件传递当前选中的值
*/
import React, { Component } from 'react';
import Radio from './';
class RadioGroup extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: props.value || '', // 当前选中的值
      name: 'radio'
    };
    this.onRadioChange = this.onRadioChange.bind(this);
  }
  // 选中事件
  onRadioChange (value) {
    const lastValue = this.state.value;
    this.setState({
      value: value
    });
    // 若父组件有需要回调，则传递当前选中的值
    if (this.props.onChange && value !== lastValue) {
      this.props.onChange(value);
    }
  }
  render () {
    let { children } = this.props;
    children = children.map((item, index) => {
      const name = item.props.name || this.state.name;
      const checked = (this.state.value === item.props.value);
      return (
        <Radio key={`${index}-radio`} onChange={this.onRadioChange} value={item.props.value} name={name} checked={checked}>{item.props.children}</Radio>
      );
    });
    return (
      <label>
        {children}
      </label>
    );
  }
}
export default RadioGroup;
