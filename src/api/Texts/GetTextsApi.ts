import Texts from './Model'
import Axios from '../Axios'

export type GetTextsResponse = Texts

export async function getTextsApi(user_id: string) {
  try {
    return await Axios.get<GetTextsResponse>('/text', {
      headers: {
        user_id
      }
    })
  } catch (e) {
    throw new Error(e)
  }
}