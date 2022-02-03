import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { hasToken } from '../utils/token';

const PublicRoute = ({component, restricted, ...rest}: any) => {
    const routeComponent = (props: any) => (
        hasToken() && restricted
            ? <Redirect to={{pathname: '/'}} />
            : React.createElement(component, props)
    );
    return <Route {...rest} render={routeComponent} />;
};

export default PublicRoute;