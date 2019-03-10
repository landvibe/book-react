import { createStore, combineReducers, applyMiddleware } from 'redux';
import timelineReducer from '../timeline/state';
import friendReducer from '../friend/state';
import createSagaMiddleware from 'redux-saga';
import timelineSaga from '../timeline/state/saga';

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
export default store;
sagaMiddleware.run(timelineSaga);
