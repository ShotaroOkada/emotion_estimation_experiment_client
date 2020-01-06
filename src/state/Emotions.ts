export enum AlgoName {
  NLU_ALGO = 'nlu_algo',
  EMOTION_PARAMETER_ALGO = 'emotion_parameter_algo',
  FEEDBACK_ALGO = 'feedback_algo'
}

type EstimateAlgorithm = {
  algo_name: AlgoName,
  emotion_category: string,
  emotion_name: string
}

type EstimateAlgorithms = {
  feedback_algo: EstimateAlgorithm,
  nlu_algo?: EstimateAlgorithm,
  emotion_parameter_algo?: EstimateAlgorithm
}

type EstimatedInfo = {
  text: string,
  previous_flag: boolean,
  algorithms: EstimateAlgorithms
}

type Emotions = {
  estimatedInfo: EstimatedInfo
  isLoading: boolean
}

export default Emotions