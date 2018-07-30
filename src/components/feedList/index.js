/**
 * 首页feed流
 * @author luyanhong
*/
import React, { Component } from 'react';
import { getFeedList } from 'api';
import Loading from 'coms/loading';
import Loadmore from 'coms/loadmore';
import './feedList.scss';
class FeedList extends Component {
  constructor () {
    super();
    this.state = {
      isLoading: true,
      afterId: 6,
      feedList: [],
      pageSize: 1
    };
    this.fetchData = this.fetchData.bind(this);
    this.fetchData();
  }
  getFeedli (feedlist) {
    return (
      <React.Fragment>
        {feedlist.map((item) =>
          (
            <dd key={item.id}>
              <h2>{item.target.title || item.target.question.title}</h2>
              <p>{item.target.excerpt_new}</p>
            </dd>
          ))
        }
      </React.Fragment>
    );
  }
  fetchData () {
    return new Promise((resolve, reject) => {
      getFeedList(this.state.afterId).then((res) => {
        const feedList = res.data;
        const isEnd = (feedList.length < this.state.pageSize);
        this.setState({
          feedList: this.state.feedList.concat(feedList),
          isLoading: false,
          afterId: isEnd ? this.state.afterId : feedList[feedList.length - 1].offset
        });
        if (isEnd) {
          resolve('end');
        }
        resolve('');
      }).catch((err) => {
        reject(err);
      });
    });
  }
  render () {
    const { isLoading, feedList } = this.state;
    let loadmore = null;
    if (!isLoading) {
      loadmore = (
        <Loadmore onClick={this.fetchData} />
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
