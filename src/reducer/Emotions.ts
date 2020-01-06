import Emotions from "../state/Emotions";
import EmotionAction from "../action/Emotions/Action";
import EmotionActionType from "../action/Emotions/ActionType";

const initialState: Emotions = {
  estimatedEmotions: {
    nlu_algo: {
      algo_name: "nlu_algo",
      text: "月曜日の朝から講義がある",
      previous_flag: true,
      emotion_category: "anger",
      emotion_name: "苛立ち"
    },
    emotion_parameter_algo: {
      algo_name: "emotion_parameter_algo",
      text: "月曜日の朝から講義がある",
      previous_flag: true,
      emotion_category: "anger",
      emotion_name: "苛立ち"
    },
    feedback_algo: {
      algo_name: "feedback_algo",
      text: "月曜日の朝から講義がある",
      previous_flag: true,
      emotion_category: "anger",
      emotion_name: "苛立ち"
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
        estimatedEmotions: { ...action.payload },
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