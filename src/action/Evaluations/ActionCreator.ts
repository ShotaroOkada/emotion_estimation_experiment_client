import { createAsyncAction } from "typesafe-actions";
import EvaluationActionType from "./ActionType";
import { PostEvaluationsParam } from "../../api/Evaluations/PostEvaluationApi";

export const postEvaluations = createAsyncAction(
  EvaluationActionType.POST_EVALUATIONS_REQUEST,
  EvaluationActionType.POST_EVALUATIONS_SUCCESS,
  EvaluationActionType.POST_EVALUATIONS_FAIL
)<PostEvaluationsParam, undefined, Error>();