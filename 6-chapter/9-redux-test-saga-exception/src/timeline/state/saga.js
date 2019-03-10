import { all, call, put, take, fork, debounce } from 'redux-saga/effects';
import { actions, types } from './index';
import { callApiLike } from '../../common/api';

export function* fetchData(action) {
  while (true) {
    const { timeline } = yield take(types.REQUEST_LIKE);
    yield put(actions.setLoading(true));
    yield put(actions.addLike(timeline.id, 1));
    yield put(actions.setError(''));
    try {
      yield call(callApiLike);
    } catch (error) {
      yield put(actions.setError(error));
      yield put(actions.addLike(timeline.id, -1));
    }
    yield put(actions.setLoading(false));
  }
}

export function* trySetText(action) {
  const { text } = action;
  yield put(actions.setText(text));
}

export default function* watcher() {
  yield all([fork(fetchData), debounce(500, types.TRY_SET_TEXT, trySetText)]);
}
