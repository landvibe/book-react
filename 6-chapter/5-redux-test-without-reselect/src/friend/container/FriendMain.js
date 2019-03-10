import React from 'react';
import { getNextFriend } from '../../common/mockData';
import * as actions from '../state';
import FriendList from '../component/FriendList';
import { connect } from 'react-redux';
import NumberSelect from '../component/NumberSelect';
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from '../common';

class FriendMain extends React.Component {
  onAdd = () => {
    const friend = getNextFriend();
    this.props.addFriend(friend);
  };
  render() {
    const {
      friendsWithAgeLimit,
      friendsWithAgeShowLimit,
      ageLimit,
      showLimit,
      setAgeLimit,
      setShowLimit,
    } = this.props;
    return (
      <div>
        <button onClick={this.onAdd}>친구 추가</button>
        <NumberSelect
          onChange={setAgeLimit}
          value={ageLimit}
          options={ageLimitOptions}
          postfix="세 이하만 보기"
        />
        <FriendList friends={friendsWithAgeLimit} />
        <NumberSelect
          onChange={setShowLimit}
          value={showLimit}
          options={showLimitOptions}
          postfix="명 이하만 보기 (연령 제한 적용)"
        />
        <FriendList friends={friendsWithAgeShowLimit} />
      </div>
    );
  }
}

const ageLimitOptions = [15, 20, 25, MAX_AGE_LIMIT];
const showLimitOptions = [2, 4, 6, MAX_SHOW_LIMIT];

const mapStateToProps = state => {
  const friends = state.friend.friends;
  const ageLimit = state.friend.ageLimit;
  const showLimit = state.friend.showLimit;
  const friendsWithAgeLimit = friends.filter(friend => friend.age <= ageLimit);
  const friendsWithAgeShowLimit = friendsWithAgeLimit.slice(0, showLimit);
  return {
    friendsWithAgeLimit,
    friendsWithAgeShowLimit,
    ageLimit,
    showLimit,
  };
};

export default connect(
  mapStateToProps,
  actions,
)(FriendMain);
