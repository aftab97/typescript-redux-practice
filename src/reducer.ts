import { AppEvents } from "./events";
import { IAction } from "./actions";

const initState: IState = {
  age: 123,
  name: "initial name",
  counter: 0,
};

export interface IState {
  age: number;
  name: string;
  counter: number;
}

export const reducer = (state: IState = initState, action: IAction): IState => {
  //pass on your actions which will control the state -> increment age etc
  switch (action.type) {
    case AppEvents.SET_AGE:
      return { ...state, age: action.payload };
    case AppEvents.SET_NAME:
      return { ...state, name: action.payload };
    case AppEvents.INCREMENT_COUNTER:
      return { ...state, counter: action.payload };
    default:
      return state;
  }
};
