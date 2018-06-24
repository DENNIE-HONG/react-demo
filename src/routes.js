import React from 'react';
import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import NotFound from './views/404';
import Login from './views/login';
class RouteMap extends React.Component {
  render () {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
export default RouteMap;
