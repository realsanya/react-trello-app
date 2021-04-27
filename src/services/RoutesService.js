import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from '../common/PrivateRoute';
import Main from '../components/Main';
import Root from '../components/Root';
import Login from '../components/Login';
import Register from '../components/Register';
import Dashboard from '../components/Dashboard';

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
        path: "/dashboard",
        isExact: true,
        render: () => <Dashboard />
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
