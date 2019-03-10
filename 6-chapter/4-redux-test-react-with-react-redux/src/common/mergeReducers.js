export default function mergeReducers(reducers) {
  return function(state, action) {
    if (!state) {
      return reducers.reduce((acc, r) => ({ ...acc, ...r(state, action) }), {});
    } else {
      let nextState = state;
      for (const r of reducers) {
        nextState = r(nextState, action);
      }
      return nextState;
    }
  };
}
