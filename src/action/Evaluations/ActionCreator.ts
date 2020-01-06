import { createAsyncAction } from "typesafe-actions";
import EvaluationActionType from "./ActionType";
import { SelectedOptions } from "../../component/Organisms/EmotionEvaluationArea";

export const postEvaluations = createAsyncAction(
  EvaluationActionType.POST_EVALUATIONS_REQUEST,
  EvaluationActionType.POST_EVALUATIONS_SUCCESS,
  EvaluationActionType.POST_EVALUATIONS_FAIL
)<SelectedOptions, undefined, Error>();