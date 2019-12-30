import { Algorithm } from './Model'
import Axios from '../Axios'

export type PostEvaluationParam = {
  [algorithm in Algorithm]: {
    text: string,
    emotion_category: string,
    emotion_name: string,
    evaluation_id: string
  }
}

export async function postEvaluationApi(user_id: string, evaluation: PostEvaluationParam) {
  try {
    return await Axios.post('./evaluation', {
      headers: {
        user_id
      },
      params: {
        evaluation
      }
    })
  } catch (e) {
    throw new Error(e)
  }
}