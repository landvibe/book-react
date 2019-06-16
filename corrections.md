# 오탈자 및 개선사항
## 1장

#### 위치: p41, 코드 1-41

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

## 4장

#### 위치: p212, 코드 4-55

내용: output1, output2, output3 오른쪽에서 호출되는 함수는 sort가 아니라 sort2 입니다.

Before
```js
const output1 = sort(inputArr1);
const output2 = sort(inputArr1);
output1 === output2; // true
const inputArr2 = [/* */];
const output3 = sort(inputArr2);
`;
```

After
```js
const output1 = sort2(inputArr1);
const output2 = sort2(inputArr1);
output1 === output2; // true
const inputArr2 = [/* */];
const output3 = sort2(inputArr2);
```
