export type EstimatedEmotions = {
  [algorithm_id: string]: {
    algorithm_id: string,
    text: string,
    emotion_name: string
  }
}