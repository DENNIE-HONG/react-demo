/**
 * 加载更多feed流模块
 * @param afterId   可选，上一个列表id
 * @author luyahong
*/
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import PropTypes from 'prop-types';
import { getFeedList } from 'api';
class Feedli extends Component {
  static propTypes = {
    afterId: PropTypes.number
  }
  static defaultProps = {
    afterId: 0
  }
  constructor (props) {
    super(props);
    this.state = {
      afterId: props.afterId,
      feedList: []
    };
  }
  componentDidMount () {
    getFeedList(this.state.afterId).then((res) => {
      this.setState({
        feedList: res.data.data
      });
    }).catch((err) => {
      console.log(err);
    });
  }
  render () {
    const { feedList } = this.state;
    return ReactDOM.createPortal(
      <React.Fragment>
        {feedList.map((item) =>
          (
            <dd key={item.id}>
              <h2>{item.target.title || item.target.question.title}</h2>
              <p>{item.target.excerpt}</p>
            </dd>
          ))}
      </React.Fragment>,
      this.props.domNode
    );
  }
}
function getFeedLi (afterId, domNode) {
  render(
    <Feedli afterId={afterId} domNode={domNode} />,
    domNode
  );
}
export default getFeedLi;
