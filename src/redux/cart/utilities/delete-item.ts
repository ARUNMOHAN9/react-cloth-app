import { IStateProductItem } from '../cart-reducer.interface'

export const deleteItemFromCart = (cartItems: IStateProductItem[], itemToDelete: IStateProductItem): IStateProductItem[] => {
    if (!itemToDelete) {
        return cartItems;
    }

    const existingCartItem = cartItems.find(item => item.id === itemToDelete.id);

    if (existingCartItem) {
        const result: IStateProductItem[] = [];
        cartItems.forEach(item => {
            if (item.id === itemToDelete.id) {
                if (item.quantity && item.quantity > 1) {
                    result.push({ ...item, quantity: item.quantity - 1 })
                }
            } else {
                result.push({ ...item })
            }
        });
        return result;
    }

    return [...cartItems, { ...itemToDelete, quantity: 1 }]
}
