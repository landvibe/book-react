import React from 'react';
import { getNextFriend } from '../../common/mockData';
import * as actions from '../state';
import FriendList from '../component/FriendList';
import { connect } from 'react-redux';

class FriendMain extends React.Component {
  onAdd = () => {
    const friend = getNextFriend();
    this.props.addFriend(friend);
  };
  render() {
    console.log('FriendMain render');
    const { friends } = this.props;
    return (
      <div>
        <button onClick={this.onAdd}>친구 추가</button>
        <FriendList friends={friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { friends: state.friend.friends };
};

// mapDispatchToProps 함수로 액션 전달하기
// import { addFriend } from '../state';
// const mapDispatchToProps = dispatch => {
//   return {
//     addFriend: friend => {
//       dispatch(addFriend(friend));
//     },
//   };
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(FriendMain);

// actions 객체로 액션 전달하기
export default connect(
  mapStateToProps,
  actions,
)(FriendMain);
