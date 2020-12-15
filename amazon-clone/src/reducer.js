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
            return { state };
            break;
        default:
            return state;
    }
}

export default reducer;