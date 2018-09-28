import React, { Component } from 'react';
import Header from 'coms/layout/header';
import CommonHead from 'coms/commonHead';
class Music extends Component {
  constructor (props) {
    super(props);
    this.fetch();
  }
  fetch () {
    console.log(11);
  }
  render () {
    return (
      <div className="music">
        <Header keywords="react练习" />
        <CommonHead />
        <main className="content">
        </main>
      </div>
    );
  }
}
export default Music;
