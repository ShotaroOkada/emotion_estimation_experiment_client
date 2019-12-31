import { combineReducers } from "redux";
import Emotions from './Emotions';
import Texts from './Texts';
import User from './User'

const rootReducer = combineReducers({
  User,
  Texts,
  Emotions
});

export default rootReducer