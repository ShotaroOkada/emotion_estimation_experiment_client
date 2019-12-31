import Axios from "../Axios"
import { EstimatedEmotions } from "./Model"

export type GetEmotionsParam = {
  text: string
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