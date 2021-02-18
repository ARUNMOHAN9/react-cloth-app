import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, RouterProps } from 'react-router-dom';
import { IState } from '../../../../../redux/interfaces/reducers/root-reducer.interface';
import { IRoute } from '../interfaces/route.interface';

interface IProps extends IRoute {
    currentUser?: any
}
const RouteWithSubRoutes = (routeProps: IProps) => {
    /** Authenticated flag */

    const authenticated: boolean = routeProps.currentUser;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Route
                path={routeProps.path}
                render={
                    (props) => {
                        if (routeProps.redirect) {
                            return <Redirect to={routeProps.redirect} />
                        }

                        if (routeProps.private) {
                            if (authenticated) {
                                return routeProps.component && <routeProps.component {...props} routeProps={routeProps.routes} />;
                            } else {
                                return <Redirect to='/login' />;
                            }
                        }

                        if (!routeProps.private && authenticated && routeProps.preventRenderAfterAuthenticated) {
                            return <Redirect to='/home' />;
                        }

                        return routeProps.component && <routeProps.component {...props} routes={routeProps.routes} />;
                    }
                }
            />
        </Suspense>
    );
};

const mapStateToProps = ({ user: { currentUser } }: IState) => ({
    currentUser
});

export default connect(mapStateToProps, null)(RouteWithSubRoutes);