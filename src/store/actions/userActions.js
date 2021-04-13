import { userService } from "../../services/userService"

export function signup(user) {
  return async dispatch => {
    console.log('signup-action', user);
    const signupUser = await userService.signup(user)
    console.log('signupUser', signupUser);
    dispatch({ type: 'SIGNUP', signupUser })
  }
}

export function addMove(contact, amount) {
  return async (dispatch, getState) => {
    // const spendAmount = chargeAmount * 0.5
    const userBalance = getState().userReducer.user.coins
    if (userBalance < amount) return alert('Not enough balance!')
    
    const updatedUser = await userService.addMove(contact, amount);
    // const updatedContact = await contactService.chargeContact(contactId, chargeAmount)
    
    dispatch({ type: 'ADD_MOVE', user: updatedUser })
    dispatch({type:'SET_USER', user: updatedUser})
    // dispatch({ type: 'SET_CONTACT', contact: updatedContact })
  }
}

// export function spendBalance(spendAmount) {
//   return async dispatch => {
//     // Update the userService
//     dispatch({ type: 'SPEND_BALANCE', spendAmount })
//   }
// }