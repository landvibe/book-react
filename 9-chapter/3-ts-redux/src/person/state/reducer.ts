import { ActionType, actions } from './action';
import { createReducer } from '../../common/redux';

export interface StatePerson {
  name: string;
  age: number;
}

const INITIAL_STATE = {
  name: 'empty',
  age: 0,
};

type Action = ReturnType<typeof actions[keyof typeof actions]>;
export default createReducer<StatePerson, ActionType, Action>(INITIAL_STATE, {
  [ActionType.SetName]: (state, action) => (state.name = action.payload.name),
  [ActionType.SetAge]: (state, action) => (state.age = action.payload.age),
});
