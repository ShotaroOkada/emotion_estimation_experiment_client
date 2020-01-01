import { takeLatest } from "redux-saga/effects";
import TextActionType from "../../action/Texts/ActionType";
import { getTextsSaga } from "./GetTextsSaga";
import { addInputedTextsSaga } from "./AddInputedTextsSga";

export const TextsSaga = [
  takeLatest(TextActionType.GET_TEXTS_REQUEST, getTextsSaga),
  takeLatest(TextActionType.ADD_INPUTED_TEXTS_REQUEST, addInputedTextsSaga)
];