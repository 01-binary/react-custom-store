import { useStore } from "./hooks/useStore";
import { createStore } from "./store";

const store = createStore({ count: 0 });

const Example2 = () => {
  const [state, setState] = useStore(store);

  function handleClick() {
    setState((prev) => ({ count: prev.count + 1 }));
  }

  return (
    <>
      <h3>{state.count}</h3>
      <button onClick={handleClick}>Click Me</button>
    </>
  );

};

export default Example2;
