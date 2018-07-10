/**
 * 多选框组
 * @param options      {Array} 必须，可选值组
 * @param value        {Array} 选中值组
 * @param onChange     {function} 回调，参数是选中的值
 * @author luyanhong
 * @example
 * <CheckboxGroup options={[1, 2]} value={[1]} onChange={function} />
*/
import React, { Component } from 'react';
import Checkbox from './';
class CheckboxGroup extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: new Set(props.value || [])
    };
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
  }
  /**
   * value 值是否选中
   * @param {String}    checkbox值
   * @param {Boolean}   该值是否选中
  */
  onCheckboxChange (value, checked) {
    const selectSet = this.state.value;
    checked && this.setState({
      value: selectSet.add(value)
    });
    !checked && selectSet.delete(value);
    // 给父组件回调选中的值组
    this.props.onChange && this.props.onChange([...selectSet]);
  }
  render () {
    return (
      <div className="com-checkbox-group">
        {this.props.options.map((item, index) => {
          const defaultChecked = this.props.value.includes(item);
          return (
            <Checkbox key={index} defaultChecked={defaultChecked} onChange={this.onCheckboxChange} value={item}>{item}</Checkbox>
          );
        })}
      </div>
    );
  }
}
export default CheckboxGroup;
