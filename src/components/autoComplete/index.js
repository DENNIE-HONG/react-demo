import React, { Component } from 'react';
import './autoComplete.scss';
class AutoComplete extends Component {
  constructor (props) {
    super(props);
    this.state = {
      placeholder: props.placeholder || ''
    };
    this.getHotList = this.getHotList.bind(this);
  }
  getHotList () {
    console.log(1);
  }
  render () {
    const searchList = (
      <div></div>
    );
    return (
      <div className="com-autocomplete">
        <div className="input-box">
          <input type="text" placeholder={this.state.placeholder} onFocus={this.getHotList} />
          <i className="iconfont icon-search"></i>
        </div>
        {searchList}
      </div>
    );
  }
}
export default AutoComplete;
