import React from 'react';
import ReactDOM from 'react-dom';
import TimelineMain from './timeline/container/TimelineMain';
import FriendMain from './friend/container/FriendMain';

ReactDOM.render(
  <div>
    <FriendMain />
    <TimelineMain />
  </div>,
  document.getElementById('root'),
);
