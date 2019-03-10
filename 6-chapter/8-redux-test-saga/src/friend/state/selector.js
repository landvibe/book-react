import { createSelector } from 'reselect';

const getFriends = state => state.friend.friends;
const getAgeLimit = (state, props) => props.ageLimit;

export const makeGetFriendsWithAgeLimit = () => {
  return createSelector(
    [getFriends, getAgeLimit],
    (friends, ageLimit) => friends.filter(friend => friend.age <= ageLimit),
  );
};
