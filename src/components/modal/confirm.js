import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import PropTypes from 'prop-types';
import './modal.scss';
/**
 * 确定框对外接口
 * @param {Object} option  包括title和content、onOk
 * @example
 * showModal({
 *    title: '标题',
 *    content: '对xx进行此操作'
 * });
*/
function showConfirm (option) {
  const root = document.createElement('div');
  document.body.appendChild(root);
  render(
    <Confirm title={option.title} content={option.content} domNode={root} onOk={option.onOk} />,
    root
  );
}
class Confirm extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    onOk: PropTypes.func
  }
  static defaultProps = {
    title: '确定删除此项？',
    content: '',
    onOk: undefined
  }
  constructor (props) {
    super(props);
    this.destroy = this.destroy.bind(this);
    this.onOk = this.onOk.bind(this);
  }
  componentDidMount () {
    document.documentElement.classList.add('lock');
  }
  onOk () {
    this.destroy();
    this.props.onOk && this.props.onOk();
  }
  destroy () {
    this.props.domNode.parentNode.removeChild(this.props.domNode);
    ReactDOM.unmountComponentAtNode(this.props.domNode);
    document.documentElement.classList.remove('lock');
  }
  render () {
    const { title, content } = this.props;
    return ReactDOM.createPortal(
      <div className="modal-bg">
        <div className="com-confirm">
          <i className="iconfont icon-ask com-confirm-logo"></i>
          <div className="com-confirm-content">
            <h3>{title}</h3>
            {content && <span>{content}</span>}
          </div>
          <div className="com-confirm-btnbox pull-right">
            <div className="btn" onClick={this.destroy}>取消</div>
            <div className="btn-primary" onClick={this.onOk}>确定</div>
          </div>
        </div>
      </div>,
      this.props.domNode
    );
  }
}
export default showConfirm;
