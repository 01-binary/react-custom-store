import { useEffect, useState } from "react";

export type Initializer<T> = T extends unknown ? T | ((prev: T) => T) : never;

type Store<State> = {
  get: () => State;
  set: (action: Initializer<State>) => State;
  subscribe: (callback: () => void) => () => void;
};

export const useStore = <State>(store: Store<State>) => {
  const [state, setState] = useState<State>(() => store.get());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.get());
    });
    return unsubscribe;
  }, [store]);
  
  return [state, store.set] as const;
};
