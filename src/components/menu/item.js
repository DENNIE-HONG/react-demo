/**
 * 菜单的每项
 * @author luyanhong 2018-07-18
*/
import React, { Component } from 'react';
import './menu.scss';
class Item extends Component {
  render () {
    return (
      <li className="com-menu-item">{this.props.children}</li>
    );
  }
}
export default Item;
