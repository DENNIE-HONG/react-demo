/**
 * 下拉菜单
 * @param {element} children  必须，下拉菜单按钮
 * @param {object} overlay   可选，下拉的菜单
 * @author luuyanhonng 2018-07-18
*/
import React from 'react';
import PropTypes from 'prop-types';
import './dropdown.scss';
const Dropdown = (props) => (
  <div className="com-dropdown">
    {props.children}
    {props.overlay && (<div className="com-dropdown-menu">{props.overlay}</div>)}
  </div>
);
Dropdown.propTypes = {
  children: PropTypes.element.isRequired,
  overlay: PropTypes.object
};
Dropdown.defaultProps = {
  overlay: false
};
export default Dropdown;
