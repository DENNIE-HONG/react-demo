/**
*  单选框组件
* @param {String}   value     初始值
* @param {String}   name      默认'', 互斥radio的name需要相同
* @param {Boolean}  checked   默认false
* @param {object}   children  文本/子节点
* @param {function} onChange  父组件定义此函数回调获取新数据
* @author luyanhong
* @example
* <Radio value="1" onChange={function} checked="false" >xxx</Radio>
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './radio.scss';
class Radio extends Component {
  static propTyps = {
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    name: PropTypes.string,
    checked: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    onChange: PropTypes.func.isRequired
  }
  static defaultProps = {
    name: '',
    checked: false,
    children: null
  }
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (event) {
    const { value } = event.target;
    // 回调给父组件
    this.props.onChange(value);
  }
  render () {
    const { children, value, name } = this.props;
    const checked = this.props.checked ? 'checked' : '';
    return (
      <label className="com-radio">
        <input type="radio" className="com-radio-original" value={value} onChange={this.handleChange} name={name} checked={checked} />
        <span>{children}</span>
      </label>
    );
  }
}
export default Radio;
