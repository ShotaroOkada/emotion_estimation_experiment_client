import Emotions from "../state/Emotions";
import EmotionAction from "../action/Emotions/Action";
import EmotionActionType from "../action/Emotions/ActionType";

const initialState: Emotions = {
  nlu_algo: {
    algorithm_id: "nlu_algo",
    text: "上司に怒鳴られた",
    previous_flag: true,
    emotion_category: "怒り",
    emotion_name: "苛立ち"
  },
  emotion_parameter_algo: {
    algorithm_id: "emotion_parameter_algo",
    text: "上司に怒鳴られた",
    previous_flag: true,
    emotion_category: "怒り",
    emotion_name: "苛立ち"
  },
  feedback_algo: {
    algorithm_id: "feedback_algo",
    text: "上司に怒鳴られた",
    previous_flag: true,
    emotion_category: "怒り",
    emotion_name: "苛立ち"
  }
}

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