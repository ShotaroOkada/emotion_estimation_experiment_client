import { combineReducers } from "redux";
import emotions from './Emotions';
import texts from './Texts';
import user from './User'

const rootReducer = combineReducers({
  user,
  texts,
  emotions
});

export default rootReducer