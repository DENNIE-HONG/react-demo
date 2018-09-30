import React, { Component } from 'react';
import Header from 'coms/layout/header';
import CommonHead from 'coms/commonHead';
import { getPersonalized } from 'api/music';
import Play from 'coms/play';
import './music.scss';
class Music extends Component {
  constructor (props) {
    super(props);
    this.state = {
      musicList: [],
      playId: 0
    };
    this.fetch();
  }
  fetch () {
    getPersonalized().then((res) => {
      console.log(res);
      if (res.code === 200) {
        this.setState({
          musicList: res.result.slice(0, 8)
        });
      }
    });
  }
  play (playId) {
    this.setState({
      playId
    });
  }
  render () {
    return (
      <div className="music">
        <Header keywords="react音乐" />
        <CommonHead />
        <main className="content global-clearfix">
          <div className="container-left">
            <section className="music-recommend">
              <div className="title">
                <i className="iconfont icon-circle"></i>
                <span className="title-txt">热门推荐</span>
              </div>
              <ul className="music-list">
                {this.state.musicList.map((item) =>
                  (
                    <li className="music-list-item" key={item.id}>
                      <div className="item-info">
                        <div className="item-info-pic">
                          <img src={item.picUrl} />
                        </div>
                        <div className="item-info-play">
                          <i className="iconfont icon-music"></i>
                          <span className="item-info-count">{item.playCount > 10000 ? `${Math.round(item.playCount / 10000)}万` : item.playCount}</span>
                          <i className="iconfont icon-video item-info-play-btn pull-right" onClick={this.play.bind(this, item.id)}></i>
                        </div>
                      </div>
                      <h4 className="item-title">{item.name}</h4>
                    </li>
                  ))}
              </ul>
            </section>
          </div>
          <Play playListId={this.state.playId} />
        </main>
      </div>
    );
  }
}
export default Music;
