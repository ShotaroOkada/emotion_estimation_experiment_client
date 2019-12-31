import { getEmotions } from "../../action/Emotions/ActionCreator";
import RootState from "../../state";
import { select, call, put } from "redux-saga/effects";
import { PromiseGenericType } from "../../utils/Type";
import { getEmotionsApi } from "../../api/Emotions/GetEmotionsApi";

export function* getEmotionsSaga(action: ReturnType<typeof getEmotions.request>) {
  const state: RootState = yield select();
  const user_id = state.user.id;

  const response: PromiseGenericType<ReturnType<typeof getEmotionsApi>> = yield call(
    getEmotionsApi,
    user_id,
    action.payload
  );

  if (response.status === 200 && response.data) {
    yield put(getEmotions.success(response.data));
  } else {
    yield put(getEmotions.failure(new Error('failure get emotions')))
  }
}