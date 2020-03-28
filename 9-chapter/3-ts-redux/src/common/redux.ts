import produce, { Draft } from 'immer';

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

export function createReducer<S, T extends string, A extends TypedAction<T>>(
  initialState: S,
  handlerMap: {
    [key in T]: (state: Draft<S>, action: Extract<A, TypedAction<key>>) => void;
  },
) {
  return function(state: S = initialState, action: Extract<A, TypedAction<T>>) {
    return produce(state, draft => {
      const handler = handlerMap[action.type];
      if (handler) {
        handler(draft, action);
      }
    });
  };
}
