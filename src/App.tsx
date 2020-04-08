import React from "react";
import "./App.css";
import { store } from "./store";

interface IProps {
  age: number;
  name: string;
  counter: number;
  onClick(): void;
  counterClick(): void;
}

export const App: React.FC<IProps> = ({
  age,
  name,
  onClick,
  counter,
  counterClick,
}) => {
  return (
    <div>
      <div className="info">
        <button onClick={onClick}>Click me and these values will change</button>
        <h2>Age: {age}</h2>
        <h2>Name: {name}</h2>
      </div>
      <div className="counter">
        <h1>counter: {counter}</h1>
        <button onClick={counterClick}>Click to increase counter</button>
      </div>
      <div className="text">
        <p>
          open up react redux dev tools to see the various states otherwise open
          up my github code to see how it is managed! In{" "}
          <span className="bold">typescript</span>
        </p>
      </div>
    </div>
  );
};
export default App;
