import * as ActionCreators from './ActionCreator';
import { ActionType } from 'typesafe-actions';

type EvaluationAction = ActionType<typeof ActionCreators>;
export default EvaluationAction