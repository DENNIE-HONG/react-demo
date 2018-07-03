/**
 * 首页feed流
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
      afterId: 13,
      feedList: [],
      isEnd: false,
      pageSize: 7
    };
  }
  componentDidMount () {
    getFeedList(this.state.afterId).then((res) => {
      this.setState({
        feedList: res.data.data,
        isLoading: false,
        isEnd: (res.data.data.length < this.state.pageSize)
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
        <div className="loadmore">点击加载更多</div>
      );
    }
    return (
      <div>
        {isLoading ? <Loading /> :
          (
            <section className="feedlist">
              <dl>
                {feedList.map((item) =>
                  (
                    <dd key={item.id}>
                      <h2>{item.target.title || item.target.question.title}</h2>
                      <p>{item.target.excerpt}</p>
                    </dd>
                  ))}
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
