import { addInputTextsRequest, addInputedTexts } from "../../action/Texts/ActionCreator";
import Texts from "../../state/Texts";
import { put, select } from "redux-saga/effects";
import RootState from "../../state";
import { getEmotions } from "../../action/Emotions/ActionCreator";

export function* addInputedTextsSaga(action: ReturnType<typeof addInputTextsRequest>) {
  let inputedTexts: Texts = []
  Object.entries(action.payload).forEach(([_, value]) => {
    if (value !== "") {
      inputedTexts.push({
        text: value,
        previous_flag: false
      }
      )
    }
  })
  yield put(addInputedTexts(inputedTexts))
  const state: RootState = yield select();
  const texts = state.texts
  const firstText = texts[0]
  yield put(getEmotions.request({ text: firstText }))
}