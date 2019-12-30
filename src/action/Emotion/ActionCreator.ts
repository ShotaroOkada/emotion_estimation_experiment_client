import { createAsyncAction } from "typesafe-actions"
import EmotionActionType from "./ActionType";
import { GetEmotionParam } from "../../api/Emotion/GetEmotionApi";
import { GetTextResponse } from "../../api/Text/GetTextApi";

export const getEmotion = createAsyncAction(
  EmotionActionType.GET_EMOTION_REQUEST,
  EmotionActionType.GET_EMOTION_SUCCESS,
  EmotionActionType.GET_EMOTION_FAIL
)<GetEmotionParam, GetTextResponse, Error>();