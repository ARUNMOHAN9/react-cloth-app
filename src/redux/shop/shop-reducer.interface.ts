import { SHOP_ACTION } from './shop-action.enum';

export interface IProductItem {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}

export interface IProductCollection {
    id: number;
    title: string;
    routeName: string;
    items: IProductItem[]
}

export interface IShopState {
    collections: IProductCollection[]
}

export interface IShopAction {
    type: SHOP_ACTION;
    payload: Partial<IShopState>;
}