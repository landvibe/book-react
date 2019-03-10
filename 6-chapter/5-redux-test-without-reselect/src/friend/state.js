import createReducer from '../common/createReducer';
import createItemsLogic from '../common/createItemsLogic';
import mergeReducers from '../common/mergeReducers';
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from './common';

const { add, remove, edit, reducer: friendsReducer } = createItemsLogic(
  'friends',
);

const SET_AGE_LIMIT = 'friend/SET_AGE_LIMIT';
const SET_SHOW_LIMIT = 'friend/SET_SHOW_LIMIT';

export const addFriend = add;
export const removeFriend = remove;
export const editFriend = edit;
export const setAgeLimit = ageLimit => ({ type: SET_AGE_LIMIT, ageLimit });
export const setShowLimit = showLimit => ({ type: SET_SHOW_LIMIT, showLimit });

const INITIAL_STATE = { ageLimit: MAX_AGE_LIMIT, showLimit: MAX_SHOW_LIMIT };
const reducer = createReducer(INITIAL_STATE, {
  [SET_AGE_LIMIT]: (state, action) => (state.ageLimit = action.ageLimit),
  [SET_SHOW_LIMIT]: (state, action) => (state.showLimit = action.showLimit),
});
const reducers = [reducer, friendsReducer];
export default mergeReducers(reducers);
