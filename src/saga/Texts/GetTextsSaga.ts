import RootState from "../../state"
import { select, call, put } from "redux-saga/effects"
import { PromiseGenericType } from "../../utils/Type";
import { getTextsApi } from "../../api/Texts/GetTextsApi";
import { getTexts, getNullText } from "../../action/Texts/ActionCreator";

export function* getTextsSaga() {
  const state: RootState = yield select();
  const user_id = state.user.id
  const response: PromiseGenericType<ReturnType<typeof getTextsApi>> = yield call(
    getTextsApi,
    user_id
  );
  console.log(response.data)
  if (response.status === 200 && response.data) {
    yield put(getTexts.success(response.data))
  } else if (response.status === 200 && response.data === null) {
    yield put(getNullText())
  } else {
    yield put(getTexts.failure(new Error('failure get text')))
  }
}