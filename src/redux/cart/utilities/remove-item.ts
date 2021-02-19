import { IStateProductItem } from '../cart-reducer.interface'

export const removeItemFromCart = (cartItems: IStateProductItem[], itemToRemove: IStateProductItem): IStateProductItem[] => {
    if (!itemToRemove) {
        return cartItems;
    }

    const existingCartItem = cartItems.find(item => item.id === itemToRemove.id);

    if (existingCartItem) {
        return cartItems.filter(item => item.id !== itemToRemove.id)
    }

    return cartItems
}
