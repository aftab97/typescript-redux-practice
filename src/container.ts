import { App as Component } from "./App";
import { compose } from "redux";
import { connect } from "react-redux";
import { Dispatch } from "react";
import { SetAge, IAction, setName, incrementCounter } from "./actions";
import { IAppState, store } from "./store";

//This is a higher order function to control all the lower level components

const mapStateToProps = (state: IAppState) => {
  return {
    age: state.app.age,
    name: state.app.name,
    counter: state.app.counter,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    onClick: () => {
      dispatch(SetAge(23));
      dispatch(setName("Aftab"));
    },
    counterClick: () => {
      dispatch(incrementCounter((store.getState().app.counter += 1)));
    },
  };
};

//holds the app component so can reference this instead of the app component in index.tsx
export const App = compose(connect(mapStateToProps, mapDispatchToProps))(
  Component
);
