import { takeLatest } from "redux-saga/effects";
import EvaluationActionType from "../../action/Evaluations/ActionType";
import { postEvaluationsSaga } from "./PostEvaluationSaga";
import { nextTextEvaluationSaga } from "./nextTextEvaluationSaga";
import EmotionsActionType from "../../action/Emotions/ActionType";

export const evaluationsSaga = [
  takeLatest(EvaluationActionType.POST_EVALUATIONS_REQUEST, postEvaluationsSaga),
  takeLatest(EvaluationActionType.POST_EVALUATIONS_SUCCESS, nextTextEvaluationSaga),
  takeLatest(EmotionsActionType.GET_EMOTION_FAIL, nextTextEvaluationSaga)
];