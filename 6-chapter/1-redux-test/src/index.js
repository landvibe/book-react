import { createStore, combineReducers } from 'redux';
import timelineReducer, {
  addTimeline,
  removeTimeline,
  editTimeline,
  increaseNextPage,
} from './timeline/state';
import friendReducer, {
  addFriend,
  removeFriend,
  editFriend,
} from './friend/state';

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});
const store = createStore(reducer);
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

store.dispatch(addTimeline({ id: 1, desc: '코딩은 즐거워' }));
store.dispatch(addTimeline({ id: 2, desc: '리덕스 좋아' }));
store.dispatch(increaseNextPage());
store.dispatch(editTimeline({ id: 2, desc: '리덕스 너무 좋아' }));
store.dispatch(removeTimeline({ id: 1, desc: '코딩은 즐거워' }));

store.dispatch(addFriend({ id: 1, name: '아이유' }));
store.dispatch(addFriend({ id: 2, name: '손나은' }));
store.dispatch(editFriend({ id: 2, name: '수지' }));
store.dispatch(removeFriend({ id: 1, name: '아이유' }));
