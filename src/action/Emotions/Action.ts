import * as ActionCreators from './ActionCreator';
import { ActionType } from 'typesafe-actions';

type EmotionsAction = ActionType<typeof ActionCreators>;
export default EmotionsAction