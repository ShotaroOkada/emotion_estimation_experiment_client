import { AlgoName } from "../../state/Emotions";

export type EstimatedEmotions = {
  [algo_name in AlgoName]: {
    algo_name: string,
    text: string,
    previous_flag: boolean,
    emotion_category: string,
    emotion_name: string
  }
} 