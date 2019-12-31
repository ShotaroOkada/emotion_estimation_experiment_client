import { PromiseGenericType } from "../../utils/Type";
import { postUserApi } from "../../api/User/PostUserApi";
import { call, put, select } from 'redux-saga/effects';
import RootState from "../../state";
import { login } from "../../action/User/ActionCreator";

export function* postUserSaga() {
  const state: RootState = yield select()
  const user_id = state.user.id
  const response: PromiseGenericType<ReturnType<typeof postUserApi>> = yield call(
    postUserApi,
    user_id
  );

  if (response.status === 200) {
    yield put(login.success({ id: user_id }))
  } else {
    yield put(login.failure(new Error('failure login')))
  }
}