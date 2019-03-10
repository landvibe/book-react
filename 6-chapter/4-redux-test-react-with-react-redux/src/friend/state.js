import createItemsLogic from '../common/createItemsLogic';

const { add, remove, edit, reducer } = createItemsLogic('friends');
export const addFriend = add;
export const removeFriend = remove;
export const editFriend = edit;
export default reducer;
