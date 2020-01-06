import { AlgoName } from '../../state/Emotions'
import Axios from '../Axios'

type EvaluationAlgorithm = {
  evaluation_id: string,
  emotion_category: string,
  emotion_name: string
}

export type EvaluationAlgorithms = {
  feedback_algo: EvaluationAlgorithm,
  nlu_algo?: EvaluationAlgorithm,
  emotion_parameter_algo?: EvaluationAlgorithm
}

export type PostEvaluationsParam = {
  text: string,
  previous_flag: boolean,
  algorithms: EvaluationAlgorithms
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