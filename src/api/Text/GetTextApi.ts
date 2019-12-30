import { Text } from './Model'
import Axios from '../Axios'

export type GetTextResponse = Text[]

export async function getTextApi(user_id: string) {
  try {
    return await Axios.get<GetTextResponse>('/text', {
      headers: {
        user_id
      }
    })
  } catch (e) {
    throw new Error(e)
  }
}