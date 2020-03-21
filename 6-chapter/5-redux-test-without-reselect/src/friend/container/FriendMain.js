import React from 'react';
import { getNextFriend } from '../../common/mockData';
import * as actions from '../state';
import FriendList from '../component/FriendList';
import NumberSelect from '../component/NumberSelect';
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from '../common';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

export default function FriendMain() {
  const [
    ageLimit,
    showLimit,
    friendsWithAgeLimit,
    friendsWithAgeShowLimit,
  ] = useSelector(state => {
    const { friends, ageLimit, showLimit } = state.friend;
    const friendsWithAgeLimit = friends.filter(
      friend => friend.age <= ageLimit,
    );
    return [
      ageLimit,
      showLimit,
      friendsWithAgeLimit,
      friendsWithAgeLimit.slice(0, showLimit),
    ];
  }, shallowEqual);
  const dispatch = useDispatch();
  function onAdd() {
    const friend = getNextFriend();
    dispatch(actions.addFriend(friend));
  }
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelect
        onChange={v => dispatch(actions.setAgeLimit(v))}
        value={ageLimit}
        options={ageLimitOptions}
        postfix="세 이하만 보기"
      />
      <FriendList friends={friendsWithAgeLimit} />
      <NumberSelect
        onChange={v => dispatch(actions.setShowLimit(v))}
        value={showLimit}
        options={showLimitOptions}
        postfix="명 이하만 보기 (연령 제한 적용)"
      />
      <FriendList friends={friendsWithAgeShowLimit} />
    </div>
  );
}

const ageLimitOptions = [15, 20, 25, MAX_AGE_LIMIT];
const showLimitOptions = [2, 4, 6, MAX_SHOW_LIMIT];
