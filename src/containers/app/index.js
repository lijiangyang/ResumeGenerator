import React, {Component} from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import routes from '../../routes';
import Show from '../../components/ResumeGenerator/Show';
import OpenMenuBtn from '../../components/ResumeGenerator/Menu/OpenMenuBtn';


@withRouter
export default class App extends Component {

  RouteWithSubRoutes = (route) => (
    <Route
      key={route.path}
      exact={route.exact || false}
      path={route.path}
      render={props => {
        let routeComp = '';
        routeComp = <route.component {...props} routes={route.routes || null} />;
        return routeComp;
      }}
    />
  );
  render() {
    return (
      <div id="appWrap">
        <OpenMenuBtn />
        <Show />
        <Switch>{routes.map(route => this.RouteWithSubRoutes(route))}</Switch>
      </div>
    );
  }
}
