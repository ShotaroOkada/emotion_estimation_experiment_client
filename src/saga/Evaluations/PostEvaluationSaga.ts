import { select, call, put } from "redux-saga/effects";
import RootState from "../../state";
import { PromiseGenericType } from "../../utils/Type";
import { postEvaluationsApi } from "../../api/Evaluations/PostEvaluationApi";
import { postEvaluations } from "../../action/Evaluations/ActionCreator";

export function* postEvaluationsSaga(action: ReturnType<typeof postEvaluations.request>) {
  const state: RootState = yield select();
  const user_id = state.user.id

  const response: PromiseGenericType<ReturnType<typeof postEvaluationsApi>> = yield call(
    postEvaluationsApi,
    user_id,
    action.payload
  )

  if (response.status === 200) {
    yield put(postEvaluations.success())
  } else {
    yield put(postEvaluations.failure(new Error('failure post evaluation')))
  }
}