import { takeLatest } from "redux-saga/effects";
import UserActionType from "../../action/User/ActionType";
import { postUserSaga } from "./PostUserSaga";

export const userSaga = [
  takeLatest(UserActionType.LOGIN_REQUEST, postUserSaga),
];