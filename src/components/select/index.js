/**
 * 选择框
 * @param defaultValue   {String | Number | Array} 默认选择值
 * @param placeholder    {Sting} 没有默认参数时，选择提示
 * @param mode           {String} 单选或多选(multiple), 默认是单选
 * @param onChange       {function}, 回调给父组件，传递选中的值(数组)
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
    // 将默认值转化为数组
    const defaultValue = Array.isArray(props.defaultValue) ? props.defaultValue : [props.defaultValue];
    this.state = {
      value: defaultValue,
      open: false,
      placeholder: props.placeholder || '请选择',
      isMultiple: props.mode === 'multiple'
    };
    this.open = this.open.bind(this);
    this.select = this.select.bind(this);
  }
  /**
   * 获取选项列表dom
   * @return {Object} 返回第一个参数是选项列表, 第二个参数是选中对象数组
   */
  getSelectList () {
    const { children } = this.props;
    const { isMultiple } = this.state;
    const selectedList = [];
    let options = null;
    options = children.map((item) => {
      const selected = this.state.value.includes(item.props.value);
      selected && (selectedList.push({
        name: item.props.children,
        value: item.props.value
      }));
      return (
        <li key={item.props.value} className={`com-select-option ${isMultiple ? 'multiple' : ''} ${selected ? 'active' : ''}`} onClick={this.select} value={item.props.value}>{item.props.children}</li>
      );
    });
    return { options, selectedList };
  }
  /**
   * 获取选中对象dom
   * @return {Element}  返回选中的标签或者值
   */
  getSelectedList (selectedList) {
    const { isMultiple } = this.state;
    let selectEle = null;
    if (isMultiple && selectedList.length) {
      selectEle = (
        <ul className="com-selected">
          {selectedList.map((tag, index) => (
            <div className="tag" key={index} onClick={(e) => this.delete(tag.value, e)} value={tag.value}>{tag.name}<i className="iconfont icon-close"></i></div>
          ))}
        </ul>
      );
    } else {
      const isSelectedNull = !selectedList.length;
      isSelectedNull && (selectedList.push({ name: this.state.placeholder }));
      selectEle = (
        <span className={`com-selected ${isSelectedNull ? 'placeholder' : ''}`}>{selectedList[0].name}</span>
      );
    }
    return selectEle;
  }
  open () {
    const toggleOpen = !this.state.open;
    this.setState({
      open: toggleOpen
    });
  }
  /**
   * 选中事件
   * 并回调传递选中的值
  */
  select (event) {
    const { value } = event.target;
    const { isMultiple } = this.state;
    !isMultiple && this.setState({
      value: [value]
    });
    isMultiple && !this.state.value.includes(value) && this.state.value.push(value);
    // 回调给父组件传递选中的值
    this.callback();
  }
  /**
   * 取消选中
   * @param {Sting | Number} value  删除元素的值
   * @param {Object}         event  事件对象
   */
  delete (value, event) {
    const selectValue = this.state.value;
    selectValue.splice(selectValue.findIndex((item) => item === value), 1);
    this.setState({
      value: selectValue
    });
    // 回调给父组件传递选中的值
    this.callback();
    event.stopPropagation();
  }
  // 回调给父组件传递选中的值
  callback () {
    // 去重
    const selectValue = new Set(this.state.value);
    this.props.onChange && this.props.onChange([...selectValue]);
  }
  render () {
    const { isMultiple } = this.state;
    const { options, selectedList } = this.getSelectList();
    const selectEle = this.getSelectedList(selectedList);
    return (
      <div className={`com-select ${this.state.open ? 'active' : ''}`} onClick={this.open} style={this.props.style}>
        {selectEle}
        <ul className="com-select-box">
          {options}
        </ul>
        {isMultiple && <i className="iconfont icon-right"></i>}
      </div>
    );
  }
}
export { Select };
