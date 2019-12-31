import { createAsyncAction } from 'typesafe-actions';
import UserActionType from './ActionType';

export const login = createAsyncAction(
  UserActionType.LOGIN_REQUEST,
  UserActionType.LOGIN_SUCCESS,
  UserActionType.LOGIN_FAIL
)<undefined, { id: string }, Error>();