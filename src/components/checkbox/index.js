/**
 * checkbox
 * @param defaultChecked    {Boolean}, 初始是否选中
 * @param value             {String | Number} 选中的值, 默认是''
 * @param onChange          {function} 回调给父组件，参数是该checkbox值与是否被选中
 * @author luyanhong
 * @example
 * <Checkbox defaultChecked={true} value="草莓" onChagne={(value, checked) =>{...}}/>选我</Checkbox>
*/
import React, { Component } from 'react';
import './checkbox.scss';
class Checkbox extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: props.value || '',
      checked: props.defaultChecked || false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange () {
    const checked = !this.state.checked;
    this.setState({
      checked: checked
    });
    this.props.onChange && this.props.onChange(this.state.value, checked);
  }
  render () {
    const checked = this.state.checked ? 'checked' : '';
    return (
      <label className="com-checkbox">
        <input type="checkbox" className="checkbox" checked={checked} onChange={this.handleChange} value={this.state.value} />
        <span className="com-checkbox-txt">{this.props.children}</span>
      </label>
    );
  }
}
export default Checkbox;
