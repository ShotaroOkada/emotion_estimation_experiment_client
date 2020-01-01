import { createAsyncAction, createAction } from "typesafe-actions";
import TextActionType from "./ActionType";
import Texts from "../../state/Texts";

export const getTexts = createAsyncAction(
  TextActionType.GET_TEXTS_REQUEST,
  TextActionType.GET_TEXTS_SUCCESS,
  TextActionType.GET_TEXTS_FAIL
)<undefined, Texts, Error>();

export const getNullText = createAction(
  TextActionType.GET_NULL_TEXT
)<undefined>();