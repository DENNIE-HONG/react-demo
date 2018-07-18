import React, { Component } from 'react';
import Header from 'coms/layout/header';
import Footer from 'coms/layout/footer';
import CommonHead from 'coms/commonHead';
class Profile extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <div className="profile">
        <Header keywords="个人页" />
        <CommonHead />
        <Footer />
      </div>
    );
  }
}
export default Profile;
