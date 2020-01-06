import { select, put } from "redux-saga/effects";
import RootState from "../../state";
import { deleteFirstText } from "../../action/Texts/ActionCreator";
import { getEmotions } from "../../action/Emotions/ActionCreator";

export function* nextTextEvaluationSaga() {
  yield put(deleteFirstText());
  const state: RootState = yield select();
  const texts = state.texts;
  if (!texts.length) return;
  const firstText = texts[0];
  yield put(getEmotions.request({ text: firstText }));
}