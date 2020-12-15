export const initialState = {
    basket: [],
    user: null,
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            // Add Item
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
            break;
        case "REMOVE_FROM_BASKET":
            // Remove Item

            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if (index >= 0) {
                // Item exists
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as it's not in the Basket`
                )
            }

            return {
                ...state,
                basket: newBasket,
            };
            break;
        default:
            return state;
    }
}

export default reducer;