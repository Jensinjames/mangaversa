import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

interface PrivateRouteProps {
  component: React.FC;
  path: string;
  exact: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const { authState } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        authState.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;