export function useReducer(state = null, action) {
  switch (action.type) {
    case "LOGIN":
      setTimeout(() => {
        window.localStorage.clear();
      }, 60 * 60);
      return action.payload;
    case "LOGOUT":
      window.localStorage.clear();
      return action.payload;
    default:
      return state;
  }
}
