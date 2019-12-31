import TextAction from "../action/Texts/Action";
import TextActionType from "../action/Texts/ActionType";
import Texts from "../state/Texts";

const initialState: Texts = []

export default (state: Texts = initialState, action: TextAction): Texts => {
  switch (action.type) {
    case TextActionType.GET_TEXTS_SUCCESS:
      return [
        ...state,
        ...action.payload
      ]
    default:
      return state;
  }
}
