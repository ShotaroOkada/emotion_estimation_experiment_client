import { select, call, put } from "redux-saga/effects";
import RootState from "../../state";
import { PromiseGenericType } from "../../utils/Type";
import { postEvaluationsApi, PostEvaluationsParam, EvaluationAlgorithms } from "../../api/Evaluations/PostEvaluationApi";
import { postEvaluations } from "../../action/Evaluations/ActionCreator";

export function* postEvaluationsSaga(action: ReturnType<typeof postEvaluations.request>) {
  const state: RootState = yield select();
  const user_id = state.user.id
  const text = state.emotions.estimatedInfo.text
  const previous_flag = state.emotions.estimatedInfo.previous_flag
  const algorithms = state.emotions.estimatedInfo.algorithms
  const evaluationAlgorithms: EvaluationAlgorithms = (previous_flag) ? {
    feedback_algo: {
      emotion_category: algorithms.feedback_algo.emotion_category,
      emotion_name: algorithms.feedback_algo.emotion_name,
      evaluation_id: action.payload.feedback_algo.value as string
    }
  } : {
      nlu_algo: {
        emotion_category: algorithms.nlu_algo?.emotion_category as string,
        emotion_name: algorithms.nlu_algo?.emotion_name as string,
        evaluation_id: action.payload.nlu_algo?.value as string
      },
      emotion_parameter_algo: {
        emotion_category: algorithms.emotion_parameter_algo?.emotion_category as string,
        emotion_name: algorithms.emotion_parameter_algo?.emotion_name as string,
        evaluation_id: action.payload.emotion_parameter_algo?.value as string
      },
      feedback_algo: {
        emotion_category: algorithms.feedback_algo.emotion_category,
        emotion_name: algorithms.feedback_algo.emotion_name,
        evaluation_id: action.payload.feedback_algo.value as string
      }
    }
  const postEvaluationsParam: PostEvaluationsParam = {
    text,
    previous_flag,
    algorithms: evaluationAlgorithms
  }
  const response: PromiseGenericType<ReturnType<typeof postEvaluationsApi>> = yield call(
    postEvaluationsApi,
    user_id,
    postEvaluationsParam
  )

  if (response.status === 200) {
    yield put(postEvaluations.success())
  } else {
    yield put(postEvaluations.failure(new Error('failure post evaluation')))
  }
}