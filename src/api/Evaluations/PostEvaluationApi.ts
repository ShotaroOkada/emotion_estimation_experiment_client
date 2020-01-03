import { AlgoName } from '../../state/Emotions'
import Axios from '../Axios'

export type PostEvaluationsParam = {
  [algo_name in AlgoName]: {
    text: string,
    previous_flag: boolean,
    emotion_category: string,
    emotion_name: string,
    evaluation_id: string
  }
}

export async function postEvaluationsApi(user_id: string, evaluation: PostEvaluationsParam) {
  try {
    return await Axios.post('/evaluation', {
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