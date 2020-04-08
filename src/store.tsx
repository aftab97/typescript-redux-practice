import { createStore, combineReducers } from "redux";
import { reducer as appReducer } from "./reducer";

//combines all the reducers -reducers bring back updated state
const reducers = combineReducers({
  //like to rename it as appReducers so we dont get mixed up with all the reducers
  app: appReducer,
});

export type IAppState = ReturnType<typeof reducers>;

export const store = createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
