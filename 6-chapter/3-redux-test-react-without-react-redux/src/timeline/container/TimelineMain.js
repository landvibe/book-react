import React from 'react';
import store from '../../common/store';
import { getNextTimeline } from '../../common/mockData';
import { addTimeline } from '../state';
import TimelineList from '../component/TimelineList.js';

// 리팩터링 후
class TimelineMain extends React.PureComponent {
  state = {
    timelines: store.getState().timeline.timelines,
  };
  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
      this.setState({ timelines: store.getState().timeline.timelines }),
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  onAdd = () => {
    const timeline = getNextTimeline();
    store.dispatch(addTimeline(timeline));
  };
  render() {
    console.log('TimelineMain render');
    const timelines = store.getState().timeline.timelines;
    return (
      <div>
        <button onClick={this.onAdd}>타임라인 추가</button>
        <TimelineList timelines={timelines} />
      </div>
    );
  }
}

// 리팩터링 전
// class TimelineMain extends React.Component {
//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => this.forceUpdate());
//   }
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//   onAdd = () => {
//     const timeline = getNextTimeline();
//     store.dispatch(addTimeline(timeline));
//   };
//   render() {
//     console.log('TimelineMain render');
//     const timelines = store.getState().timeline.timelines;
//     return (
//       <div>
//         <button onClick={this.onAdd}>타임라인 추가</button>
//         <TimelineList timelines={timelines} />
//       </div>
//     );
//   }
// }

export default TimelineMain;
