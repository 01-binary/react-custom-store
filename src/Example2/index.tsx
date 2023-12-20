import { ChangeEvent, useCallback, useEffect } from "react";
import { useStoreSelector } from "./hooks/useStoreSelector";
import { createStore } from "./store";

const store = createStore({ count: 0, text: 'hi' });

const textSelector = (state: ReturnType<typeof store.get>) => state.text

const Example2_1 = () => {
  const counter = useStoreSelector(
    store,
    useCallback((state) => state.count, [])
  );

  function handleClick() {
    store.set((prev) => ({ ...prev, count: prev.count + 1 }));
  }

  useEffect(() => {
    console.log('Counter Rendered');
  });

  return (
    <>
      <h3>{counter}</h3>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
};

const Example2_2 = () => {
  const text = useStoreSelector(
    store,
    textSelector
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    store.set((prev) => ({ ...prev, text: e.target.value }))
  }

  useEffect(() => {
    console.log('Text Rendered');
  });

  return (
    <>
      <h3>{text}</h3>
      <input value={text} onChange={handleChange} />
    </>
  );
};

export {Example2_1, Example2_2};
