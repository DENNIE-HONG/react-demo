/**
 * 菜单
 * @param style      样式
 * @author luyanhong 2018-07-18
*/
import React, { Component } from 'react';
import Item from './item';
import './menu.scss';

class Menu extends Component {
  static Item = Item;
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <ul className="com-menu" style={this.props.style}>
        {this.props.children.map((item, index) => (
          <Item key={index} onClick={item.props.onClick}>{item.props.children}</Item>
        ))}
      </ul>
    );
  }
}
export { Menu };
