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
        exact: false,
        component: lazy(() => import('../../../../shop')),
        routes: [
            {
                path: '/shop/:categoryId',
                key: 'CATEGORY_PAGE',
                private: true,
                exact: false,
                component: lazy(() => import('../../../../shop/pages/categoryPage/CategoryPage.component')),
            },
            {
                path: '/shop',
                key: 'SHOP_PAGE',
                private: true,
                exact: false,
                component: lazy(() => import('../../../../shop/pages/shopPage/ShopPage.component')),
            }
        ]
    },
    {
        path: '/checkout',
        key: 'CHECKOUT_PAGE',
        private: true,
        component: lazy(() => import('../../../../checkout')),
    }
];

export default ROUTES;
