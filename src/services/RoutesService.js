import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from '../common/PrivateRoute';
import Main from '../components/Main';
import Root from '../components/Root';
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';
import Support from '../components/Support';
import Settings from '../components/Settings';
import Default from '../components/Default';

const routesData = [
    {
        path: "/main",
        isExact: true,
        render: () => <Main />
    },
    {
        path: "/signIn",
        isExact: true,
        render: () => <Login />
    },
    {
        path: "/signUp",
        isExact: true,
        render: () => <Register />
    },
    {
      path: "/home",
      isExact: true,
      render: () => <Home />
    },
    {
      path: "/dashboard",
      isExact: true,
      render: () => <Default />
    },
    {
        path: "/dashboard/:projectId/:dashboardId",
        isExact: true,
        render: () => <Dashboard />
    },
    {
      path: "/support",
      isExact: true,
      render: () => <Support />
    },
    {
      path: "/settings",
      isExact: true,
      render: () => <Settings />
    }
];

const privateRoutesData = [
    {
      path: "/",
      isExact: true,
      component: <Root />,
    },
  ];

const routesComponents = routesData.map((el) => (
    <Route
      key={el.path}
      path={el.path}
      exact={el.isExact}
      component={el.component || el.render}
    />
));

const privateRoutesComponents = privateRoutesData.map((elem) => (
    <PrivateRoute key={elem.path} path={elem.path} exact={elem.isExact}>
      {elem.component}
    </PrivateRoute>
  ));

const routes = [...routesComponents, ...privateRoutesComponents];

export const getAllRoutes = () => {
    return routes;
}
