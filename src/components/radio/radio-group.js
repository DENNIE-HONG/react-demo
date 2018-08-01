/**
 * radio单选组
 * @param value     {String | Number} 默认选中的值
 * @param name      {String} 每个radio名字，默认'radio'
 * @param children  {Array}  组件里包含的radio数组
 * @param onChange  {function} 给父组件传递当前选中的值
 * @author luyanhong
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radio from './index.js';
class RadioGroup extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    name: PropTypes.string,
    onChange: PropTypes.func,
    children: PropTypes.array.isRequired
  }
  static defaultProps = {
    value: '',
    name: 'radio',
    onChange: undefined
  }
  constructor (props) {
    super(props);
    this.state = {
      value: props.value
    };
    this.onRadioChange = this.onRadioChange.bind(this);
  }
  // 选中事件
  onRadioChange (value) {
    const lastValue = this.state.value;
    this.setState({
      value
    });
    // 若父组件有需要回调，则传递当前选中的值
    if (this.props.onChange && value !== lastValue) {
      this.props.onChange(value);
    }
  }
  render () {
    let { children } = this.props;
    children = children.map((item, index) => {
      const name = item.props.name || this.props.name;
      const checked = (this.state.value === item.props.value);
      return (
        <Radio key={`${index}-radio`} onChange={this.onRadioChange} value={item.props.value} name={name} checked={checked}>{item.props.children}</Radio>
      );
    });
    return (
      <div>
        {children}
      </div>
    );
  }
}
export default RadioGroup;
