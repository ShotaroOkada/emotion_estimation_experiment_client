import TextAction from "../action/Text/Action";
import TextActionType from "../action/Text/ActionType";
import Texts from "../state/Texts";

const initialState: Texts = []

const Texts = (state: Texts = initialState, action: TextAction): Texts => {
  switch (action.type) {
    case TextActionType.GET_TEXT_SUCCESS:
      return [
        ...state,
        ...action.payload
      ]
    default:
      return state;
  }
}

export default Texts;