import { StateType } from "typesafe-actions";
import rootReducer from "../reducer";

type RootState = StateType<typeof rootReducer>;

export default RootState;