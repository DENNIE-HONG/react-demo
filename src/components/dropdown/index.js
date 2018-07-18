/**
 * 下拉菜单
 * @param {element} overlay  下拉的菜单
 * @author luuyanhonng 2018-07-18
*/
import React, { Component } from 'react';
import './dropdown.scss';
class Dropdown extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <div className="com-dropdown">
        {this.props.children}
        <div className="com-dropdown-menu">{this.props.overlay}</div>
      </div>
    );
  }
}
export default Dropdown;
