/**
 * 选择框
 * @param defaultValue   {String | Number} 默认选择值
 * @param onChange       {function}, 回调给父组件，传递选中的值
 * @author luyanhong
 * @example
 * <Select>
 *  <option value={1}>选项1</option>
 * </Select>
*/
import React, { Component } from 'react';
import './select.scss';
class Select extends Component {
  constructor (props) {
    super(props);
    this.state = {
      mode: props.mode || '',
      value: props.defaultValue,
      open: false,
      placeholder: props.placeholder || '请选择'
    };
    this.open = this.open.bind(this);
    this.select = this.select.bind(this);
  }
  open () {
    const toggleOpen = !this.state.open;
    this.setState({
      open: toggleOpen
    });
  }
  select (event) {
    const { value } = event.target;
    this.setState({
      value: value
    });
    // 回调给父组件传递选中的值
    this.props.onChange && this.props.onChange(value);
  }
  render () {
    const { children } = this.props;
    let selectName;
    const options = children.map((item, index) => {
      const selected = this.state.value === item.props.value;
      selected && (selectName = item.props.children);
      return (
        <li key={index} className={`com-select-option ${selected ? 'active' : ''}`} onClick={this.select} value={item.props.value}>{item.props.children}</li>
      );
    });
    !selectName && (selectName = this.state.placeholder);
    return (
      <div className={`com-select ${this.state.open ? 'active' : ''}`} onClick={this.open} style={this.props.style}>
        <span className="com-selected">{selectName}</span>
        <ul className="com-select-box">
          {options}
        </ul>
        {(this.props.mode != 'multiple') && <i className="iconfont icon-right"></i>}
      </div>
    );
  }
}
export { Select };
