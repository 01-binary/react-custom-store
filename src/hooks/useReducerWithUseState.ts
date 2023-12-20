import { useCallback, useState } from "react";

const useReducerWithUseState = (reducer, initialState, initializer) => {
  const [state, setState] = useState(
    initializer ? () => initializer(initialState) : initialState
  );
  const dispatch = useCallback(
    (action) => setState((prev) => reducer(prev, action)),
    [reducer]
  );
  return [state, dispatch];
};

export default useReducerWithUseState;
