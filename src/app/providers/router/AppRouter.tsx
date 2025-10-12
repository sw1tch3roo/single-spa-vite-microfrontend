import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router';
import { Private, Public } from './RequireAuth';
import { type AppRoutesProps, routeConfig } from './config';

const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const el = <Suspense fallback={<div>loading...</div>}>{route.element}</Suspense>;

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <Private>{el}</Private> : <Public>{el}</Public>}
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});

export default AppRouter;
