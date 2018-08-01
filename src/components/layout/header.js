import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
require('assets/main.scss');
class Header extends Component {
  static propTypes = {
    keywords: PropTypes.string.isRequired
  }
  render () {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="keywords" content={this.props.keywords} />
          <meta name="description" content={this.props.keywords} />
          <meta name="renderer" content="webkit|ie-comp|ie-stand" />
          <title>My React</title>
        </Helmet>
      </div>
    );
  }
}
export default Header;
