import { IStateProductItem } from '../cart-reducer.interface'

export const removeItemToCart = (cartItems: IStateProductItem[], itemToRemove: IStateProductItem): IStateProductItem[] => {
    if (!itemToRemove) {
        return cartItems;
    }

    const existingCartItem = cartItems.find(item => item.id === itemToRemove.id);

    if (existingCartItem) {
        const result: IStateProductItem[] = [];
        cartItems.forEach(item => {
            if (item.id === itemToRemove.id) {
                if (item.quantity && item.quantity > 1) {
                    result.push({ ...item, quantity: item.quantity - 1 })
                }
            } else {
                result.push({ ...item })
            }
        });
        return result;
    }

    return [...cartItems, { ...itemToRemove, quantity: 1 }]
}
