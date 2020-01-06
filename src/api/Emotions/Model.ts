import { AlgoName } from "../../state/Emotions";


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

export type EstimatedEmotions = {
  text: string,
  previous_flag: boolean,
  algorithms: EstimateAlgorithms
}