import { ICartState, IStateProductItem } from '../cart-reducer.interface'

export const addItemToCart = (currentState: ICartState, newItem: IStateProductItem): ICartState => {
    if (!newItem) {
        return currentState;
    }

    const currentCartList = currentState.cartItems;
    let result: IStateProductItem[] = [];

    const itemExists = currentCartList.find(item => item.id === newItem.id);

    if (itemExists) {
        itemExists.quantity++;
        result = [...currentCartList];
    } else {
        result = [...currentCartList, { ...newItem, quantity: 1 }];
    }

    return {
        ...currentState,
        cartItems: result
    };
}