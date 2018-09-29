import React, { Component } from 'React';
import PropTypes from 'prop-types';
class Play extends Component {
  static propTypes = {
    playData: PropTypes.object
  }
  static defaultProps = {
    playData: {}
  }
  constructor (props) {
    super(props);
    console.log(11);
  }
  render () {
    return (
      <div className="paly">

        <audio>
          <source src={this.props.playData} type="mp3" />
          <track kind="subtitles" src="ss.str" srcLang="zh" />
          <track kind="subtitles" src="subs_eng.srt" srcLang="en" label="English" />
        </audio>
      </div>
    );
  }
}
export default Play;
