import React from 'react';
import { getNextFriend } from '../../common/mockData';
import * as actions from '../state';
import FriendList from '../component/FriendList';
import { connect } from 'react-redux';
import {
  makeGetFriendsWithAgeLimit,
  getFriendsWithAgeLimit,
} from '../state/selector';

class FriendMain extends React.Component {
  onAdd = () => {
    const friend = getNextFriend();
    this.props.addFriend(friend);
  };
  render() {
    const { friendsWithAgeLimit } = this.props;
    return (
      <div>
        <button onClick={this.onAdd}>친구 추가</button>
        <FriendList friends={friendsWithAgeLimit} />
      </div>
    );
  }
}

// 리팩터링 후
const makeMapStateToProps = () => {
  const getFriendsWithAgeLimit = makeGetFriendsWithAgeLimit();
  const mapStateToProps = (state, props) => {
    return {
      friendsWithAgeLimit: getFriendsWithAgeLimit(state, props),
    };
  };
  return mapStateToProps;
};
export default connect(
  makeMapStateToProps,
  actions,
)(FriendMain);

// 리팩터링 전
// const mapStateToProps = (state, props) => {
//   return {
//     friendsWithAgeLimit: getFriendsWithAgeLimit(state, props),
//   };
// };
// export default connect(
//   mapStateToProps,
//   actions,
// )(FriendMain);
