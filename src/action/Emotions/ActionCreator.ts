import { createAsyncAction } from "typesafe-actions"
import EmotionActionType from "./ActionType";
import { GetEmotionsParam, GetEmotionsResponse } from "../../api/Emotions/GetEmotionsApi";

export const getEmotions = createAsyncAction(
  EmotionActionType.GET_EMOTION_REQUEST,
  EmotionActionType.GET_EMOTION_SUCCESS,
  EmotionActionType.GET_EMOTION_FAIL
)<GetEmotionsParam, GetEmotionsResponse, Error>();