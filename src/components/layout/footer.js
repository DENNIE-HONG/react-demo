import React, { Component } from 'react';
import './layout.scss';
class Footer extends Component {
  render () {
    const year = new Date().getFullYear();
    return (
      <footer>
        <div className="footer-cont"></div>
        <div className="footer-bottom">
          <small>@{year} Made with luyanhong</small>
        </div>
      </footer>
    );
  }
}
export default Footer;
