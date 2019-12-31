import Emotions from "../state/Emotions";
import EmotionAction from "../action/Emotions/Action";
import EmotionActionType from "../action/Emotions/ActionType";

const initialState: Emotions = {}

const Emotions = (state: Emotions = initialState, action: EmotionAction): Emotions => {
  switch (action.type) {
    case EmotionActionType.GET_EMOTION_SUCCESS:
      return {
        ...action.payload
      }
    default:
      return state;
  }
}

export default Emotions;