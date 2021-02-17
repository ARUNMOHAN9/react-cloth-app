import { lazy } from 'react';
import { IRoute } from '../interfaces/route.interface';

const ROUTES: IRoute[] = [
    {
        path: '/',
        key: 'ROOT',
        exact: true,
        redirect: '/home'
    },
    {
        path: '/home',
        key: 'HOME',
        exact: true,
        component: lazy(() => import('../../../../home')),
    },
    {
        path: '/login',
        key: 'LOGIN_PAGE',
        component: lazy(() => import('../../../../login')),
    },
    {
        path: '/shop',
        key: 'SHOP_PAGE',
        component: lazy(() => import('../../../../shop')),
    }
];

export default ROUTES;
