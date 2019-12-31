import Emotions from "../state/Emotions";
import EmotionAction from "../action/Emotions/Action";
import EmotionActionType from "../action/Emotions/ActionType";

const initialState: Emotions = {}

export default (state: Emotions = initialState, action: EmotionAction): Emotions => {
  switch (action.type) {
    case EmotionActionType.GET_EMOTION_SUCCESS:
      return {
        ...action.payload
      }
    default:
      return state;
  }
}