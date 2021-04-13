const INITIAL_STATE = {
  user: { name: '', coins: 100 }
}
export function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SIGNUP':
      console.log('state-reducer', state)
      return {
        ...state,
        user: { ...state.user }
      }
    case 'ADD_MOVE':
      return {
        ...state,
        user: { ...state.user, coins: state.user.coins - state.amount }
      }
      case 'SET_USER':
        return{
            ...state,
            user:action.user
        }

    default:
      return state
  }
}