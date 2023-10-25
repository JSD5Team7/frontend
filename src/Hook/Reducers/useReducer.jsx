export function useReducer(state = null, action) {
  switch (action.type) {
    case "LOGIN":
      setTimeout(() => {
        window.localStorage.clear();
      }, 3600000);
      return action.payload;
    case "LOGOUT":
      window.localStorage.clear();
      return action.payload;
    default:
      return state;
  }
}
