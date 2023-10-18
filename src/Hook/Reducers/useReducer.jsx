

export function useReducer(state = null, action) {
    switch (action.type) {
        case 'LOGIN':
            return action.payload;
        case 'LOGOUT':
            return ;
        default:
            return state;
    }
}
