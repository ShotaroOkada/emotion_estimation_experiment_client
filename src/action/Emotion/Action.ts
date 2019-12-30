import * as ActionCreators from './ActionCreator';
import { ActionType } from 'typesafe-actions';

type EmotionAction = ActionType<typeof ActionCreators>;
export default EmotionAction