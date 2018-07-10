/**
 * 搜索自动匹配模块
 * @param placeholder     {String} 输入搜索提示
 * @author luyanhong
 * @example
 * <AutoComplete placeholder="请搜索东西" />
*/
import React, { Component } from 'react';
import { debounce } from 'throttle-debounce';
import { getSearchSuggest } from 'api';
import './autoComplete.scss';
class AutoComplete extends Component {
  constructor (props) {
    super(props);
    this.state = {
      placeholder: props.placeholder || '',
      isSearchList: false,
      searchList: null,
      keyword: ''
    };
    // 加入防抖限制频率
    this.getSearchList = debounce(400, this.getSearchList.bind(this));
  }
  getSearchList (event) {
    const keyword = event.target.value.trim();
    this.setState({
      keyword: keyword
    });
    keyword && getSearchSuggest(this.state.keyword).then((res) => {
      this.setState({
        searchList: res.suggest
      });
    }).catch((err) => {
      console.log(err);
    });
  }
  getHotList () {
    return (
      <React.Fragment>
        <div className="search-type">
          <div className="type-name">话题</div>
          <h3>react</h3>
          <h3>react-dom</h3>
        </div>
        <div className="search-type">
          <div className="type-name">问题</div>
          <h3>react测试吗？</h3>
          <h3>马桶有什么推荐的妈妈妈妈妈妈吗</h3>
        </div>
        <div className="search-type">
          <div className="type-name">文章</div>
          <h3>react测试吗？</h3>
          <h3>马桶有什么推荐的妈妈妈妈妈妈吗</h3>
        </div>
        <div className="search-more">查看所有结果</div>
      </React.Fragment>
    );
  }
  /**
   * 是否显示热门搜索
  */
  showSearchList (isSearchList) {
    this.setState({
      isSearchList: isSearchList
    });
  }
  render () {
    let searchList = null;
    this.state.searchList && (searchList = (
      <React.Fragment>
        {this.state.searchList.map((item, index) => (
          <h3 key={index}>{item.query}</h3>
        ))}
      </React.Fragment>
    ));
    const hotList = (
      <div className={`search-list ${this.state.isSearchList ? 'active' : ''}`}>
        <div className={`search-hot-list ${this.state.keyword ? 'active' : ''}`}>
          {this.getHotList()}
        </div>
        <div className={`search-suggest-list ${this.state.keyword ? '' : 'active'}`}>
          {searchList}
        </div>
      </div>
    );
    return (
      <div className="com-autocomplete">
        <div className="input-box">
          <input type="text" placeholder={this.state.placeholder} onChange={(e) => { e.persist(); this.getSearchList(e); }} onFocus={this.showSearchList.bind(this, true)} onBlur={this.showSearchList.bind(this, false)} />
          <i className="iconfont icon-search"></i>
        </div>
        {hotList}
      </div>
    );
  }
}
export default AutoComplete;
