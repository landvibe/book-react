import React from 'react';
import styled from 'styled-components';

const BoxCommon = styled.div`
  height: 50px;
  background-color: #aaaaaa;
`;
// styled-components 버전이 올라가면서 책에서 사용한 extend 함수가 styled 함수로 변경됐습니다.
const BoxBig = styled(BoxCommon)`
  width: 200px;
`;
const BoxSmall = styled(BoxCommon)`
  width: 100px;
`;

function Box({ size }) {
  if (size === 'big') {
    return <BoxBig>큰 박스</BoxBig>;
  } else {
    return <BoxSmall>작은 박스</BoxSmall>;
  }
}
export default Box;
