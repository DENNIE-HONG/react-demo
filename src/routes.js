import React from 'react';
import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import NotFound from './views/404';
class RouteMap extends React.Component {
  render () {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
export default RouteMap;
