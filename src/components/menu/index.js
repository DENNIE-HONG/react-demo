/**
 * 菜单
 * @param style      可选，样式
 * @author luyanhong 2018-07-18
*/
import React from 'react';
import PropTypes from 'prop-types';
import Item from './item';
import './menu.scss';

const Menu = (props) => (
  <ul className="com-menu" style={props.style}>
    {props.children.map((item, index) => (
      <Item key={index} onClick={item.props.onClick}>{item.props.children}</Item>
    ))}
  </ul>
);
Menu.Item = Item;
Menu.propTypes = {
  children: PropTypes.array.isRequired,
  style: PropTypes.object
};
Menu.defaultProps = {
  style: null
};
export default Menu;
