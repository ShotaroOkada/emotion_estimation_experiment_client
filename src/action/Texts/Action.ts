import * as ActionCreators from './ActionCreator';
import { ActionType } from 'typesafe-actions';

type TextsAction = ActionType<typeof ActionCreators>;

export default TextsAction;