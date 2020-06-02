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

### 위치: p45, 코드 1-44

내용: `onChangPage`를 `onChangePage`로 변경 (코드 동작에는 영향 없음)

### 위치: p48, 코드 1-47

내용: `bludRoom`을 `blueRoom`으로 변경 (코드 동작에는 영향 없음)

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

## 3장

### 위치: p109, 코드 3-4

내용: `this.color`가 아니라 `this.state.color` 입니다.

### 위치: p111, 코드 3-7

내용: 2번 코드에서 `props.title`이 아니라 `this.props.title` 입니다.

### 위치: p118, 코드 3-20

내용: `elements.type`이 아니라 `element.type` 입니다.

### 위치: p133, 코드 3-38

내용: 속성값은 value가 아니라 price 입니다.

Before
```js
return <PriceInput key={product.id} value={product.price} />;
```

After
```js
return <PriceInput key={product.id} price={product.price} />;
```

### 위치: p134, 코드 3-39

내용: 속성값은 value가 아니라 price 입니다.

Before
```js
return <PriceInput onChange={this.onChangePrice} value={currentPrice} />;
```

After
```js
return <PriceInput onChange={this.onChangePrice} price={currentPrice} />;
```

### 위치: p143

내용: 오해의 소지가 커서 문장을 수정.

Before: componentDidUpdate 메서드가 첫 렌더링 `후`에 호출되지 않는다는 이유로 코드가 복잡해진다.

After: componentDidUpdate 메서드가 첫 렌더링 `직후`에 호출되지 않는다는 이유로 코드가 복잡해진다.

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

### 위치: p273, 글상자

내용: 글상자의 내용이 문맥상 어울리지 않는다. 삭제하자.

`값에 의한 호출과 참조에 의한 호출`과는 무관하게 아래와 같이 작성한 코드는 잘 동작한다.

`state[name] = state[name].filter(item => item.id !== action.item.id);`

그리고 글상자의 내용처럼 아래처럼 작성한 코드는 잘못된 코드다.

`state = state.filter(item => item.id !== action.item.id);`

하지만 문맥상 어울리지 않는 내용이므로 해당 글상자는 다음 쇄에 삭제하는 게 좋겠다.

## 7장

### 위치: p351, 코드 7-65

내용: clean-webpack-plugin major 버전이 올라가면서 내보내는 방식이 변경됐습니다.

Before
```js
const CleanWebpackPlugin = require('clean-webpack-plugin');
```

After
```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
```

## 8장

### 위치: p376, 코드 8-4 그리고 p389, 코드 8-20

내용: clean-webpack-plugin 버전이 올라가면서 여러 개의 웹팩 설정을 실행할 때 새로 생성되는 파일까지 삭제하는 문제가 있습니다.

따라서 clean-webpack-plugin과 관련된 코드를 삭제해주세요.

clean-webpack-plugin을 사용하지 않아도 책의 내용을 이해하는데 전혀 문제가 되지 않습니다.

## 9장

### 위치: p468, 코드 9-64

내용: typescript가 더 똑똑해져서(버전이 올라가서) swapProperty 함수에서 타입 에러가 발생합니다. 세 번째 매개변수의 타입도 제네릭을 이용해야 타입 에러가 발생하지 않습니다.

참고 링크: https://github.com/microsoft/TypeScript/pull/30769

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
