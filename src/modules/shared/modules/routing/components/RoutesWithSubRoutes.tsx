import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IRoute } from '../interfaces/route.interface';

const RouteWithSubRoutes = (route: IRoute) => {
    /** Authenticated flag */
    const authenticated: boolean = true;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Route
                path={route.path}
                render={(props) =>
                    route.redirect ? <Redirect to={route.redirect} /> :
                        route.private ? (
                            authenticated ? route.component &&
                                <route.component {...props} routes={route.routes} /> : <Redirect to='/login' />
                        ) : route.component && <route.component {...props} routes={route.routes} />
                }
            />
        </Suspense>
    );
};

export default RouteWithSubRoutes;