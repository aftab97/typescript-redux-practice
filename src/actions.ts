import { AppEvents } from "./events";

export interface IAction {
  type: AppEvents;
  payload: any;
}

export const SetAge = (payload: any) => {
  return {
    type: AppEvents.SET_AGE,
    payload,
  };
};

export const setName = (payload: any) => {
  return {
    type: AppEvents.SET_NAME,
    payload,
  };
};

export const incrementCounter = (payload: any) => {
  return {
    type: AppEvents.INCREMENT_COUNTER,
    payload,
  };
};

//THIS CAN ALSO BE DONE LIKE THIS
// const makeAction = <T extends AppEvents, P>(type: T) => (payload: P) => {
//   return {
//     type,
//     payload,
//   };
// };

// export const setName = makeAction<AppEvents.SET_NAME, string>(
//   AppEvents.SET_NAME
// );
