export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            return {
                ...state,
                events: [action.payload, ...state.events]
            }
        case 'DELETE_EVENT':
            return {
                ...state,
                events: state.events.filter(e => e.id !== action.payload)
            }
        default:
            return state;
    }
}