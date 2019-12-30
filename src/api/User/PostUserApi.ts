import Axios from "../Axios"


export async function postUserApi(user_id: string) {
  try {
    return await Axios.post('/user', {
      headers: {
        user_id
      }
    });
  } catch (e) {
    throw new Error(e);
  }
}