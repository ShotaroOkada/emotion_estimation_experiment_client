import { createAsyncAction } from "typesafe-actions";
import EvaluationActionType from "./ActionType";
import { PostEvaluationParam } from "../../api/Evaluation/PostEvaluationApi";

export const postEvaluation = createAsyncAction(
  EvaluationActionType.POST_EVALUATION_REQUEST,
  EvaluationActionType.POST_EVALUATION_SUCCESS,
  EvaluationActionType.POST_EVALUATION_FAIL
)<PostEvaluationParam, undefined, Error>();