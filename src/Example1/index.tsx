import { useState } from "react";
import { State, get, set } from "./counter";

const Example1 = () => {
  const [count, setCount] = useState(get());

  function handleClick() {
    set((prev: State) => {
      const newState = { counter: prev.counter + 1 };
      setCount(newState);
      return newState;
    });
  }
  return (
    <>
      <h3>{count.counter}</h3>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
};

export default Example1;
