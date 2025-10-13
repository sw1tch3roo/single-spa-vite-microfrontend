import { type PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router';
import { isAuthorized } from '~/shared/lib/isAuthorized';
import { getRoutes } from '~/shared/model/router';

export const Private = ({ children }: PropsWithChildren) => {
    const isAuth = isAuthorized();

    if (!isAuth) {
        return (
            <Navigate
                to={getRoutes().getRouteLogin()}
                replace
            />
        );
    }

    return children;
};

export const Public = ({ children }: PropsWithChildren) => {
    const { pathname } = useLocation();
    const isAuth = isAuthorized();

    if (!isAuth || ![getRoutes().getRouteLogin()].includes(pathname)) {
        return (
            <Navigate
                to={getRoutes().getRouteMain()}
                replace
            />
        );
    }

    return children;
};
