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
      feedList: []
    };
  }
  componentDidMount () {
    getFeedList(this.state.afterId).then((res) => {
      this.setState({
        feedList: res.data.data,
        isLoading: false
      });
    }).catch((err) => {
      console.log(err);
    });
  }
  render () {
    const { isLoading, feedList } = this.state;
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
            </section>
          )
        }
      </div>
    );
  }
}
export default FeedList;
