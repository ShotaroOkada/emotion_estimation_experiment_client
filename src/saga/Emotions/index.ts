import { takeLatest } from "redux-saga/effects";
import EmotionsActionType from "../../action/Emotions/ActionType";
import { getEmotionsSaga } from "./GetEmotions";

export const emotionsSaga = [
  takeLatest(EmotionsActionType.GET_EMOTION_REQUEST, getEmotionsSaga),
];