import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types'; 
ComponentHeader.PropTypes = {
  name: PropTypes.string
};
export default class ComponentHeader extends React.Component {
  render () {  
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="keywords" content="" />
          <meta name="description" content="react练习" />
          <meta name="renderer" content="webkit|ie-comp|ie-stand"/>
          <title>My Title</title>
        </Helmet>
      </div>
    );
  }
}
