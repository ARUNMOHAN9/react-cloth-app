import { ICartState, IStateProductItem } from '../cart-reducer.interface'

export const removeItemToCart = (currentState: ICartState, newItem: IStateProductItem): ICartState => {
    if (!newItem) {
        return currentState;
    }

    const currentCartList = currentState.cartItems;
    const itemIndex = currentCartList.findIndex(item => item.id === newItem.id);

    if (itemIndex > -1) {
        const selectedItem = currentCartList[itemIndex];

        if (selectedItem.quantity === 1) {
            currentCartList.splice(itemIndex, 1)
            return {
                ...currentState,
                cartItems: [...currentCartList]
            };
        } else {
            currentCartList[itemIndex].quantity--;
            return {
                ...currentState,
                cartItems: currentCartList
            };
        }
    } else {
        return currentState;
    }
}