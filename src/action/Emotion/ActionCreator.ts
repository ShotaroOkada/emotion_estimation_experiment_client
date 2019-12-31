import { createAsyncAction } from "typesafe-actions"
import EmotionActionType from "./ActionType";
import { GetEmotionParam, GetEmotionResponse } from "../../api/Emotion/GetEmotionApi";

export const getEmotion = createAsyncAction(
  EmotionActionType.GET_EMOTION_REQUEST,
  EmotionActionType.GET_EMOTION_SUCCESS,
  EmotionActionType.GET_EMOTION_FAIL
)<GetEmotionParam, GetEmotionResponse, Error>();