

export function useReducer(state = null, action) {
    switch (action.type) {
        case 'LOGIN':
            return action.payload;
        case 'LOGOUT':
            window.localStorage.clear()
            return action.payload;
        default:
            return state;
    }
}
