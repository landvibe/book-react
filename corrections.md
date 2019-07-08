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

## 9장

### 위치: p468, 코드 9-64

내용: typescript가 더 똑똑해져서(버전이 올라가서) swapProperty 함수에서 타입 에러가 발생합니다. 세 번째 매개변수의 타입도 제네릭을 이용해야 타입 에러가 발생하지 않습니다.

Before
```js
function swapProperty<T extends Person>(
  p1: T,
  p2: T,
  name: keyof Person,
): void {
  const temp = p1[name];
  p1[name] = p2[name];
  p2[name] = temp;
}
```

After
```js
function swapProperty<T extends Person, K extends keyof Person>(
  p1: T,
  p2: T,
  prop: K,
): void {
  const temp = p1[prop];
  p1[prop] = p2[prop];
  p2[prop] = temp;
}
```
