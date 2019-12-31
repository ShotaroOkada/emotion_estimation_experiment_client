import { all } from "redux-saga/effects";
import { userSaga } from "./User";
import { TextsSaga } from "./Texts";
import { emotionsSaga } from "./Emotions";
import { evaluationsSaga } from "./Evaluations";

export default function* rootSaga() {
  yield all([
    ...userSaga,
    ...TextsSaga,
    ...emotionsSaga,
    ...evaluationsSaga
  ])
}