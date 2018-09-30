import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMusic, getPlaylistDetail } from 'api/music';
import './play.scss';
class Play extends Component {
  static propTypes = {
    playListId: PropTypes.number.isRequired
  }
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      picUrl: '',
      musicUrl: '',
      index: 0
    };
    this.myRef = React.createRef();
  }
  // 当数据改变
  componentDidUpdate (prevProps) {
    prevProps.playListId !== this.props.playListId && this.fetchDetail();
  }
  fetchData (id) {
    getMusic(id).then((res) => {
      console.log(res);
      if (res.code === 200 && res.data[0].url) {
        this.setState({
          musicUrl: res.data[0].url
        });
        const audio = this.myRef.current;
        audio.src = res.data[0].url;
        audio.play();
      }
    }).catch((err) => {
      console.log(err);
    });
  }
  fetchDetail () {
    getPlaylistDetail(this.props.playListId).then((res) => {
      console.log(res);
      if (res.code === 200) {
        const play = res.playlist.tracks[this.state.index];
        this.setState({
          name: play.name,
          picUrl: play.al.picUrl
        });
        this.fetchData(play.id);
      }
    }).catch((err) => {
      console.log(err);
    });
  }
  render () {
    const { name, picUrl, musicUrl } = this.state;
    return (
      <div className="play">
        <div className="content">
          <div className="play-action">
            <div><i className="iconfont icon-backoff"></i></div>
            <div className="play-action-start"><i className="iconfont icon-video"></i></div>
            <div><i className="iconfont icon-forward"></i></div>
          </div>
          <div className="play-info">
            <div className="play-info-pic">
              <img src={`${picUrl}?param=34y34`} />
            </div>
            <div className="play-info-box">
              <h4>{name}</h4>
              <div className="play-progress">
                <div className="play-progress-bar"></div>
              </div>
              <div className="play-info-time">
                <span className="time-now">00:00</span> / 06:00
              </div>
            </div>
          </div>
        </div>
        <audio ref={this.myRef}>
          <track kind="subtitles" src="ss.str" srcLang="zh" />
          <track kind="subtitles" src="subs_eng.srt" srcLang="en" label="English" />
        </audio>
      </div>
    );
  }
}
export default Play;
