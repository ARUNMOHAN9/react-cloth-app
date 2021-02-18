import { Component, ComponentType, LazyExoticComponent, ReactNode } from 'react';

export interface IRoute {
    path: string,
    key: string,
    exact?: boolean,
    component?: LazyExoticComponent<ComponentType<any>>,
    fallback?: NonNullable<ReactNode> | NonNullable<Component>;
    redirect?: string,
    private?: boolean,
    preventRenderAfterAuthenticated?: boolean,
    routes?: IRoute[]
}