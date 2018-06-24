import React from 'react';
import ComponentHeader from 'coms/layout/header';
class NotFound extends React.Component {
  render () {
    return (
      <div>
        <ComponentHeader keywords="404" />
        <div className="not-found"></div>
      </div>
    );
  }
}
export default NotFound;
