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
        private: true,
        component: lazy(() => import('../../../../home')),
    },
    {
        path: '/login',
        key: 'LOGIN_PAGE',
        component: lazy(() => import('../../../../login')),
        preventRenderAfterAuthenticated: true
    },
    {
        path: '/shop',
        key: 'SHOP_PAGE',
        private: true,
        component: lazy(() => import('../../../../shop')),
    }
];

export default ROUTES;
