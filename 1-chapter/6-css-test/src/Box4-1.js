import React from 'react';
import styled from 'styled-components';

const BoxCommon = styled.div`
  height: 50px;
  background-color: #aaaaaa;
`;
const BoxBig = BoxCommon.extend`
  width: 200px;
`;
const BoxSmall = BoxCommon.extend`
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
