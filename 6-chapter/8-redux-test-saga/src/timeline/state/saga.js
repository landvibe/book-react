import { all, call, put, take, fork } from 'redux-saga/effects';
import { actions, types } from './index';
import { callApiLike } from '../../common/api';

export function* fetchData(action) {
  while (true) {
    const { timeline } = yield take(types.REQUEST_LIKE);
    yield put(actions.setLoading(true));
    yield put(actions.addLike(timeline.id, 1));
    yield call(callApiLike);
    yield put(actions.setLoading(false));
  }
}

export default function* watcher() {
  yield all([fork(fetchData)]);
}
