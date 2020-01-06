export enum AlgoName {
  NLU_ALGO = 'nlu_algo',
  EMOTION_PARAMETER_ALGO = 'emotion_parameter_algo',
  FEEDBACK_ALGO = 'feedback_algo'
}

type EstimatedEmotions = {
  [algo_name in AlgoName]: {
    algo_name: string,
    text: string,
    previous_flag: boolean,
    emotion_category: string,
    emotion_name: string
  }
}

type Emotions = {
  estimatedEmotions: EstimatedEmotions
  isLoading: boolean
}

export default Emotions