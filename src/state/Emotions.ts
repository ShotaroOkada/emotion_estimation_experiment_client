type Emotions = {
  [algorithm_id: string]: {
    algorithm_id: string,
    text: string,
    previous_flag: boolean,
    emotion_category: string,
    emotion_name: string
  }
}

export default Emotions