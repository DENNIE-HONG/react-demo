/**
 * 菜单的每项
 * @param childrem   可选，每项的结构或文案
 * @param onClick    可选，每项的点击事件
 * @author luyanhong 2018-07-18
*/
import React from 'react';
import PropTypes from 'prop-types';
import './menu.scss';
const Item = (props) => (
  <li className="com-menu-item" onClick={props.onClick}>{props.children}</li>
);
Item.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
};
Item.defaultProps = {
  onClick: function () {},
  children: null
};
export default Item;
