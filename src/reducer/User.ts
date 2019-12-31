import User from "../state/User";
import UserAction from "../action/User/Action";
import UserActionType from "../action/User/ActionType";

const userIdToSessionStorage = sessionStorage.getItem('userId');
const initialState: User = userIdToSessionStorage ? {
  id: userIdToSessionStorage,
  isLoggedIn: true
} : {
    id: '',
    isLoggedIn: false
  }

export default (state: User = initialState, action: UserAction): User => {
  switch (action.type) {
    case UserActionType.LOGIN_SUCCESS:
      return {
        ...state,
        id: action.payload.id,
        isLoggedIn: true
      }
    default:
      return state;
  }
}