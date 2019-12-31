import { createAsyncAction } from "typesafe-actions";
import TextActionType from "./ActionType";
import { GetTextsResponse } from "../../api/Texts/GetTextsApi";

export const getTexts = createAsyncAction(
  TextActionType.GET_TEXTS_REQUEST,
  TextActionType.GET_TEXTS_SUCCESS,
  TextActionType.GET_TEXTS_FAIL
)<undefined, GetTextsResponse, Error>();