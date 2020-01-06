import Emotions, { AlgoName } from "../state/Emotions";
import EmotionAction from "../action/Emotions/Action";
import EmotionActionType from "../action/Emotions/ActionType";

const initialState: Emotions = {
  estimatedInfo: {
    text: "",
    previous_flag: false,
    algorithms: {
      feedback_algo: {
        emotion_category: "",
        emotion_name: "",
        algo_name: AlgoName.FEEDBACK_ALGO
      }
    }
  },
  isLoading: false
}

export default (state: Emotions = initialState, action: EmotionAction): Emotions => {
  switch (action.type) {
    case EmotionActionType.GET_EMOTION_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case EmotionActionType.GET_EMOTION_SUCCESS:
      return {
        ...state,
        estimatedInfo: { ...action.payload },
        isLoading: false
      }
    case EmotionActionType.GET_EMOTION_FAIL:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
}