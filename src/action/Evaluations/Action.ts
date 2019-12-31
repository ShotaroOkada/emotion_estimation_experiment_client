import * as ActionCreators from './ActionCreator';
import { ActionType } from 'typesafe-actions';

type EvaluationsAction = ActionType<typeof ActionCreators>;
export default EvaluationsAction