import Axios from "../Axios"
import { EstimatedEmotions } from "./Model"

export type GetEmotionParam = {
  text: string
}

export type GetEmotionResponse = EstimatedEmotions

export async function getEmotionApi(user_id: string, { text }: GetEmotionParam) {
  try {
    return await Axios.get<GetEmotionResponse>('/emotion', {
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