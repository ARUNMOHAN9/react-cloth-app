import React from 'react';
import { Switch } from 'react-router';
import { IRoute } from '../interfaces/route.interface';
import RouteWithSubRoutes from './RoutesWithSubRoutes';

interface IProps {
    routes: IRoute[];
}

const Router: React.FC<IProps> = ({ routes }) => {
    return <Switch>{routes.map((route: IRoute) => <RouteWithSubRoutes {...route} />)}</Switch>;
};

export default Router;