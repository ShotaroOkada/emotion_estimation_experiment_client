export type Text = {
  text: string,
  previous_flag: boolean
}

type Texts = {
  [key: string]: Text
}

export default Texts