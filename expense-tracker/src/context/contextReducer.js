const contextReducer = (state, action) => {
    let transactions;
    switch (action.type) {
        case 'ADD_TRANSACTION':
            transactions = [
                ...state,
                action.payload,
            ]
            return transactions;
        case 'DELETE_TRANSACTION':
            transactions = state.filter((t) => t.id !== action.payload)
            return transactions;
        default:
            return state;
    }
}

export default contextReducer;
