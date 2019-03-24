import { createStore } from 'redux';
import { combineReducers } from 'redux';
import person, { StatePerson } from '../person/state/reducer';
import product, { StateProduct } from '../product/state/reducer';

export interface ReduxState {
  person: StatePerson;
  product: StateProduct;
}

const reducer = combineReducers<ReduxState>({
  person,
  product,
});

export const store = createStore(reducer);
