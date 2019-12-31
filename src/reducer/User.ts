import User from "../state/User";
import UserAction from "../action/User/Action";
import UserActionType from "../action/User/ActionType";

const initialState: User = {
  id: ''
}

const User = (state: User = initialState, action: UserAction): User => {
  switch (action.type) {
    case UserActionType.LOGIN_SUCCESS:
      return {
        ...state,
        id: action.payload.id
      }
    default:
      return state;
  }
}

export default User;