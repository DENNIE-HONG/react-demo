/**
 * 开关组件
 * @param defaultChecked     添加该字段开关状态是'on'
 * @param checkedChildren    { String } 'on' 显示的文案
 * @param unCheckedChildren  { String } 'off' 显示的文案
 * @param onChange           { Function } 返回当前开关的状态，true表示'on'
 * @author luyanhong
*/
import React, { Component } from 'react';
import './switch.scss';
class Switch extends Component {
  constructor (props) {
    super(props);
    this.state = {
      checked: props.defaultChecked || false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange () {
    const toggleStatus = !this.state.checked;
    this.setState({
      checked: toggleStatus
    });
    // 回调传递是否选中,参数{Boolean}
    this.props.onChange && this.props.onChange(toggleStatus);
  }
  render () {
    const { checked } = this.state;
    const checkedText = this.props.checkedChildren || null;
    const uncheckedText = this.props.unCheckedChildren || null;
    return (
      <div className={`com-switch ${checked ? 'active' : ''}`} onClick={this.handleChange} >
        {checked && <span className="com-switch-txt">{checkedText}</span>}
        {!checked && <span className="com-switch-txt">{uncheckedText}</span>}
      </div>
    );
  }
}
export default Switch;
