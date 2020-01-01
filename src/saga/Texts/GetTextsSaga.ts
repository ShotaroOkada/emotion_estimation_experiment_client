import RootState from "../../state"
import { select, call, put } from "redux-saga/effects"
import { PromiseGenericType } from "../../utils/Type";
import { getTextsApi } from "../../api/Texts/GetTextsApi";
import { getTexts, getNullText } from "../../action/Texts/ActionCreator";
import Texts from "../../state/Texts";

export function* getTextsSaga() {
  const state: RootState = yield select();
  const user_id = state.user.id
  const response: PromiseGenericType<ReturnType<typeof getTextsApi>> = yield call(
    getTextsApi,
    user_id
  );
  console.log(response)
  if (response.status === 200 && response.data) {
    const constPostStoreData: Texts = Object.entries(response.data).map(([_, value]) => {
      return value
    })
    yield put(getTexts.success(constPostStoreData))
  } else if (response.status === 200 && response.data === null) {
    yield put(getNullText())
  } else {
    yield put(getTexts.failure(new Error('failure get text')))
  }
}