import { takeLatest } from "redux-saga/effects";
import EvaluationActionType from "../../action/Evaluations/ActionType";
import { postEvaluationsSaga } from "./PostEvaluationSaga";

export const evaluationsSaga = [
  takeLatest(EvaluationActionType.POST_EVALUATIONS_REQUEST, postEvaluationsSaga),
];