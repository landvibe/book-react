import React from 'react';
import { ReduxState } from '../../common/store';
import { actions } from '../state/action';
import { useSelector, useDispatch } from 'react-redux';
import useTypedSelector from '../../common/useTypedSelector';

interface Props {
  birthday: string;
}

export default function Person({ birthday }: Props) {
  // const name = useSelector<ReduxState, string>(state => state.person.name);
  // const age = useSelector<ReduxState, number>(state => state.person.age);
  const name = useTypedSelector(state => state.person.name);
  const age = useTypedSelector(state => state.person.age);
  const dispatch = useDispatch();
  function onClick() {
    dispatch(actions.setName('mike'));
    dispatch(actions.setAge(23));
  }
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{birthday}</p>
      <button onClick={onClick}>정보 추가하기</button>
    </div>
  );
}
