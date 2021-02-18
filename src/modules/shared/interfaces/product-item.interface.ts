export interface IProductItem {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}

export interface IProductCategory {
    id: number;
    title: string;
    routeName: string;
    items: IProductItem[]
}