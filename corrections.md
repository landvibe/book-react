# 오탈자 및 개선사항
## 1장

#### 위치: 코드 1-41

내용: styled-components 버전이 올라가면서 책에서 사용한 `extend` 함수가 `styled` 함수로 변경됐습니다.

Before
```js
const BoxBig = BoxCommon.extend`
  width: 200px;
`;
```

After
```js
const BoxBig = styled(BoxCommon)`
  width: 200px;
`;
```
