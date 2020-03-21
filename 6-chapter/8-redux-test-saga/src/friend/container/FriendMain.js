import React, { useMemo } from 'react';
import { getNextFriend } from '../../common/mockData';
import * as actions from '../state';
import FriendList from '../component/FriendList';
import { useSelector, useDispatch } from 'react-redux';
import { makeGetFriendsWithAgeLimit } from '../state/selector';

export default function FriendMain({ ageLimit }) {
  const getFriendsWithAgeLimit = useMemo(makeGetFriendsWithAgeLimit, []);
  const friendsWithAgeLimit = useSelector(state =>
    getFriendsWithAgeLimit(state, ageLimit),
  );
  const dispatch = useDispatch();
  function onAdd() {
    const friend = getNextFriend();
    dispatch(actions.addFriend(friend));
  }
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendList friends={friendsWithAgeLimit} />
    </div>
  );
}
