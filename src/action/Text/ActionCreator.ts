import { createAsyncAction } from "typesafe-actions";
import TextActionType from "./ActionType";
import { GetTextResponse } from "../../api/Text/GetTextApi";

export const getText = createAsyncAction(
  TextActionType.GET_TEXT_REQUEST,
  TextActionType.GET_TEXT_SUCCESS,
  TextActionType.GET_TEXT_FAIL
)<undefined, GetTextResponse, Error>();