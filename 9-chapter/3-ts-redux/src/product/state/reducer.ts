import { ActionType, actions } from './action';
import { createReducer } from '../../common/redux';

export interface StateProduct {
  name: string;
  price: number;
  count: number;
}

const INITIAL_STATE = {
  name: 'empty',
  price: 0,
  count: 0,
};

type Action = ReturnType<typeof actions[keyof typeof actions]>;
export default createReducer<StateProduct, ActionType, Action>(INITIAL_STATE, {
  [ActionType.SetName]: (state, action) => (state.name = action.payload.name),
  [ActionType.SetPrice]: (state, action) =>
    (state.price = action.payload.price),
  [ActionType.IncreaseCount]: (state, _) => (state.count += 1),
});
