import { IStateProductItem } from '../cart-reducer.interface'

export const addItemToCart = (cartItems: IStateProductItem[], itemToAdd: IStateProductItem): IStateProductItem[] => {
    if (!itemToAdd) {
        return cartItems;
    }

    const existingCartItem = cartItems.find(item => item.id === itemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(item => {
            if (item.id === itemToAdd.id) {
                return { ...item, quantity: (item.quantity || 0) + 1 }
            } else {
                return item;
            }
        });
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }]
}
