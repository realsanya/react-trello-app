import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as tokenService from "../../services/TokenService";

const PrivateRoute = ({ children, ...rest }) => {
console.log(tokenService.isTokenPresent());
  return (
    <Route
      {...rest}
      render={({ location }) =>
        tokenService.isTokenPresent() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signIn",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;