/**
 * 首页feed流
 * @author luyanhong
*/
import React, { Component } from 'react';
import { getFeedList } from 'api';
import Loading from 'coms/loading';
import './feedList.scss';
class FeedList extends Component {
  constructor () {
    super();
    this.state = {
      isLoading: true,
      afterId: 0,
      feedList: [],
      isEnd: false,
      pageSize: 3
    };
  }
  componentDidMount () {
    this.fetchData();
  }
  getFeedli (feedlist) {
    return (
      <React.Fragment>
        {feedlist.map((item) =>
          (
            <dd key={item.id}>
              <h2>{item.target.title || item.target.question.title}</h2>
              <p>{item.target.excerpt}</p>
            </dd>
          ))
        }
      </React.Fragment>
    );
  }
  fetchData () {
    getFeedList(this.state.afterId).then((res) => {
      this.setState({
        feedList: this.state.feedList.concat(res.data.data),
        isLoading: false,
        isEnd: (res.data.data.length < this.state.pageSize),
        afterId: (this.state.afterId + res.data.data.length)
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  render () {
    const { isLoading, feedList, isEnd } = this.state;
    let loadmore = null;
    if (!isEnd) {
      loadmore = (
        <div className="loadmore" onClick={this.fetchData.bind(this)}>点击加载更多</div>
      );
    }
    const children = this.getFeedli(feedList);
    return (
      <div>
        {isLoading ? <Loading /> :
          (
            <section className="feedlist">
              <dl>
                {children}
              </dl>
              {loadmore}
            </section>
          )
        }
      </div>
    );
  }
}
export default FeedList;
