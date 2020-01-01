import Axios from "../Axios"
import { EstimatedEmotions } from "./Model"
import { Text } from "../../state/Texts"

export type GetEmotionsParam = {
  text: Text
}

export type GetEmotionsResponse = EstimatedEmotions

export async function getEmotionsApi(user_id: string, { text }: GetEmotionsParam) {
  try {
    return await Axios.get<GetEmotionsResponse>('/emotion', {
      headers: {
        user_id
      },
      params: {
        text
      }
    })
  } catch (e) {
    throw new Error(e)
  }
}