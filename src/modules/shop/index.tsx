import React from 'react';
import Router from '../shared/modules/routing/components/Router';
import { IRoute } from '../shared/modules/routing/interfaces/route.interface';

interface IProps {
    routeProps: IRoute[];
}

const Shop = ({ routeProps }: IProps) => {
    return (<Router routes={routeProps} />);
}

export default Shop;