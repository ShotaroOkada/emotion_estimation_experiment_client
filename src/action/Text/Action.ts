import * as ActionCreators from './ActionCreator';
import { ActionType } from 'typesafe-actions';

type TextAction = ActionType<typeof ActionCreators>;

export default TextAction;