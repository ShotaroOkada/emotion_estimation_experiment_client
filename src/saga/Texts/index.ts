import { takeLatest } from "redux-saga/effects";
import TextActionType from "../../action/Texts/ActionType";
import { getTextsSaga } from "./GetTextsSaga";

export const TextsSaga = [
  takeLatest(TextActionType.GET_TEXTS_REQUEST, getTextsSaga),
];