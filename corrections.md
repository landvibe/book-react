# 오탈자 및 개선사항
## 1장

### 위치: p5, 코드 1-1

내용: 불필요한 슬래시(/) 제거

Before
```js
<script src="react.development.js"/></script>
```

After
```js
<script src="react.development.js"></script>
```


### 위치: p24

내용: `__tset__`를 `__tests__`로 변경

### 위치: p41, 코드 1-41

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

## 2장

### 위치: p65, 코드 2-39

내용: 마지막 콘솔 로그의 결과는 0이 아니라 21입니다.

### 위치: p67, 코드 2-45

내용: 소괄호의 위치 변경

Before
```js
({ foo: obj.prop, bar: arr[0] }) = {foo:123, bar:true};
```

After
```js
({ foo: obj.prop, bar: arr[0] } = {foo:123, bar:true});
```

## 4장

### 위치: p212, 코드 4-55

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

## 6장

### 위치: p291, 코드 6-58

내용: getAgeLimit, getShowLimit 함수 export 하기

Before
```js
const getAgeLimit = state => state.friend.ageLimit;
const getShowLimit = state => state.friend.showLimit;
```

After
```js
export const getAgeLimit = state => state.friend.ageLimit;
export const getShowLimit = state => state.friend.showLimit;
```
