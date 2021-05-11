import React from "react";
import { withRouter, Switch } from "react-router-dom";
import { getAllRoutes } from '../../services/RoutesService';

const Container = (props) => {
    const routes = getAllRoutes();

    return (
        <Switch location={props.location}>{routes}</Switch>
    );
  }
  
  export default withRouter(Container);
  