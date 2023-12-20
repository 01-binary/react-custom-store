import { useReducer } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Initializer<T> = T extends any ? T | ((prev: T) => T) : never;

export default function useStateWithUseReducer<T>(initialState: T) {
  const [state, dispatch] = useReducer(
    (prev: T, action: Initializer<T>) =>
      typeof action === "function" ? action(prev) : action,
      initialState
  );
  return [state, dispatch];
}
