import { login } from "../../action/User/ActionCreator";
import { PromiseGenericType } from "../../utils/Type";
import { postUserApi } from "../../api/User/PostUserApi";
import { call, put, select } from 'redux-saga/effects';
import RootState from "../../state";

export function* postUserSaga(action: ReturnType<typeof login.request>) {
  const state: RootState = yield select()
  const user_id = state.User.id
  const response: PromiseGenericType<ReturnType<typeof postUserApi>> = yield call(
    postUserApi,
    user_id
  );


}