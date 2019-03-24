import produce from 'immer';

interface TypedAction<T extends string> {
  type: T;
}
interface TypedPayloadAction<T extends string, P> extends TypedAction<T> {
  payload: P;
}

export function createAction<T extends string>(type: T): TypedAction<T>;
export function createAction<T extends string, P>(
  type: T,
  payload: P,
): TypedPayloadAction<T, P>;
// @ts-ignore
export function createAction(type, payload?) {
  return payload !== undefined ? { type, payload } : { type };
}

export function createReducer<S, A extends TypedAction<string>>(
  initialState: S,
  handlerMap: {
    [key in A['type']]: (state: S, action: Extract<A, TypedAction<key>>) => void
  },
) {
  return function(state: S = initialState, action: A) {
    return produce(state, draft => {
      // @ts-ignore
      const handler = handlerMap[action.type];
      if (handler) {
        handler(draft, action);
      }
    });
  };
}
