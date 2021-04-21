import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../components/Main';
import Root from '../components/Root';
import Login from '../components/Login';
import Register from '../components/Register';

const routesData = [
    {
        path: "/main",
        isExact: true,
        render: () => <Main />
    },
    {
        path: "/",
        isExact: true,
        render: () => <Root />,
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
    }
];

const routesComponents = routesData.map((el) => (
    <Route
      key={el.path}
      path={el.path}
      exact={el.isExact}
      component={el.component || el.render}
    />
));

const routes = [...routesComponents];

export const getAllRoutes = () => {
    return routes;
}
