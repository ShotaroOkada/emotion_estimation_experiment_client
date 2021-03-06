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
    case TextActionType.ADD_INPUTED_TEXTS:
      return [
        ...state,
        ...action.payload
      ]
    case TextActionType.DELETE_FIRST_TEXT:
      return [
        ...state.slice(1)
      ]
    default:
      return state;
  }
}
