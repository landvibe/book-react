import React from 'react';
import { connect } from 'react-redux';
import { ReduxState } from '../../common/store';
import { actions } from '../state/action';

type PropsState = ReturnType<typeof mapStateToProps>;
type PropsDispatch = typeof actions;
interface Props extends PropsState, PropsDispatch {
  birthday: string;
}

class Person extends React.Component<Props> {
  onClick = () => {
    this.props.setName('mike');
    this.props.setAge(23);
  };
  render() {
    const { name, age, birthday } = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{birthday}</p>
        <button onClick={this.onClick}>정보 추가하기</button>
      </div>
    );
  }
}

export const mapStateToProps = (state: ReduxState) => {
  return {
    name: state.person.name,
    age: state.person.age,
  };
};

export default connect(
  mapStateToProps,
  actions,
)(Person);
